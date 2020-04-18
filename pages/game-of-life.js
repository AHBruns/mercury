import React, { useEffect, useState, createRef } from "react";
import * as Comlink from "comlink";

// const refs = new Array(1000)
//   .fill(1)
//   .map(() => new Array(1000).fill(1).map(() => createRef()));
const workerCount = 40;
let workers = new Array(workerCount).fill(1);
let currWorker = 0;

export default () => {
  const [[width, height], setDimensions] = useState([undefined, undefined]);
  const [spawnDensity, setSpawnDensity] = useState(0.2);
  const [cellSize, setCellSize] = useState(16);
  const [frameRate, setFrameRate] = useState(1000);
  const [grid, setGrid] = useState(undefined);
  const [mouseDown, setMouseDown] = useState(false);
  const [tmpChangeQ, setTmpChangeQ] = useState([]);
  const [changeQ, setChangeQ] = useState([]);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    workers = workers.map(() =>
      Comlink.wrap(new Worker("/game-of-life-helper.js"))
    );
  }, []);

  useEffect(() => {
    if (width !== window?.innerWidth || height !== window?.innerHeight) {
      setDimensions([window?.innerWidth, window?.innerHeight]);
    }
  });

  useEffect(() => {
    if (height === undefined || width === undefined) return;
    const rows = Math.round((height - 144) / cellSize);
    const cols = Math.round(width / cellSize);
    setGrid(
      new Array(rows).fill(true).map((_) =>
        new Array(cols).fill(true).map((_) => ({
          currentState: Math.random() > 1 - spawnDensity,
        }))
      )
    );
  }, [width, height, cellSize]);

  useEffect(() => {
    if (grid === undefined) return;
    let cancel = false;

    (async () => {
      try {
        const rows = parseInt(((height - 144) / cellSize).toFixed(0));
        const promises = new Array(rows).fill(1).map((_, i) => {
          currWorker += 1;
          currWorker %= workerCount;
          return workers[currWorker].calculateNewRow(i, grid);
        });
        const newGridPromise = Promise.all(promises);
        newGridPromise
          .then((newGrid) => {
            for (const change of changeQ) {
              newGrid[change.i][change.j].currentState = true;
            }
            for (const change of tmpChangeQ) {
              newGrid[change.i][change.j].inTmpQ = true;
            }
            setChangeQ([]);
            setTimeout(() => {
              if (!cancel) setGrid(newGrid);
            }, 1000 / frameRate);
          })
          .catch((err) => console.error(err));
      } catch (err) {
        console.error(err);
        setRetry(retry++);
      }
    })();
    return () => {
      cancel = true;
    };
  }, [grid, retry]);

  return (
    <div className="flex items-center justify-center flex-1 w-full">
      <div
        style={{
          width: Math.round(width / cellSize) * cellSize - 48,
          height: Math.round((height - 72) / cellSize) * cellSize - 72,
        }}
        className="relative"
      >
        <div
          className="flex flex-col w-full h-full transparent"
          {...(cellSize >= 28
            ? {
                onMouseDown: () => setMouseDown(true),
                onMouseUp: () => {
                  setTmpChangeQ([...tmpChangeQ]);
                  setMouseDown(false);
                },
              }
            : {})}
        >
          {grid?.map((row, i) => (
            <div key={i} className="flex flex-1">
              {row.map((item, j) => (
                <div
                  draggable="false"
                  key={j}
                  //   ref={refs[i][j]}
                  className={`flex-1 p-0 transition-all duration-75 stop-drag ${
                    item.currentState ? "bg-gray-900" : "bg-gray-100"
                  }`}
                ></div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute inset-0 game-of-life-custom-inner-shadow" />
      </div>
      <div className="absolute bottom-0 left-0 max-w-sm p-3">
        <div className="w-full p-6 bg-gray-100 rounded-lg shadow-2xl">
          <h1 className="text-2xl font-semibold text-gray-900">About</h1>
          <hr className="mt-2 border-gray-900" />
          <p className="mt-3 text-justify">
            This is an implementation of Conway's Game of Life. The rules can be
            found{" "}
            <a
              aria-label="game of life rules"
              href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
              className="text-blue-400"
            >
              here
            </a>
            . My implementation uses the{" "}
            <a
              aria-label="web workers api"
              href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
              className="text-blue-400"
            >
              Web Workers API
            </a>{" "}
            to calculate the grid's transitions in parallel for performance
            reasons. However, even with these optimizations the simulation can
            be a little slow especially on high resolution screens and/or low
            power CPUs.
          </p>
          <button
            aria-label="respawn"
            className="w-full px-2 py-1 mt-3 text-gray-100 bg-gray-900 rounded-full shadow-md focus:outline-none hover:bg-gray-800"
            onClick={() => {
              window.location.reload(false);
            }}
          >
            Respawn
          </button>
        </div>
      </div>
    </div>
  );
};
