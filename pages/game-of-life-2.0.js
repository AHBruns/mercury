import NoSSR from "react-no-ssr";
import Head from "next/head";
import React, { useState, useRef, useEffect } from "react";

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

let blockSize = 24;

const useWindowSize = () => {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

const countCell = (i, j, grid, rows, cols) => {
  try {
    return grid[i % rows][j % cols].currentState === "ALIVE" ? 1 : 0;
  } catch (err) {}
  return 0;
};

let id = undefined;
let count = 0;
let lastT = 0;
let previousStates = {};

const GOL = () => {
  const canvasRef = useRef(null);
  const windowSize = useWindowSize();
  const [reset, setReset] = useState(0);
  const [grid, setGrid] = useState(undefined);
  const [showCard, setShowCard] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(true);
  const [overlayRendered, setOverlayRendered] = useState(true);

  if (windowSize.width < 500) blockSize = 16;
  else if (windowSize.width < 800) blockSize = 20;
  else blockSize = 24;

  const rows = Math.round((windowSize.height - 40 - 96) / blockSize);
  const cols = Math.round((windowSize.width - 40) / blockSize);
  const height = rows * blockSize;
  const width = cols * blockSize;

  function renderCanvas(t) {
    if (canvasRef.current !== null && grid) {
      if (t - lastT > 1000 / (overlayOpen ? 20 : 60)) {
        lastT = t;
        const state = JSON.stringify(grid);
        if (previousStates[state]) {
          setReset(reset + 1);
          setShowCard(true);
          setTimeout(() => setShowCard(false), 2000);
          return;
        } else {
          previousStates[state] = true;
          try {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            for (let i = 0; i < rows; i++) {
              for (let j = 0; j < cols; j++) {
                const surroundings =
                  countCell(i - 1, j - 1, grid, rows, cols) +
                  countCell(i - 1, j, grid, rows, cols) +
                  countCell(i - 1, j + 1, grid, rows, cols) +
                  countCell(i, j - 1, grid, rows, cols) +
                  countCell(i, j + 1, grid, rows, cols) +
                  countCell(i + 1, j - 1, grid, rows, cols) +
                  countCell(i + 1, j, grid, rows, cols) +
                  countCell(i + 1, j + 1, grid, rows, cols);
                if (grid[i][j].currentState === "ALIVE" && surroundings < 2)
                  grid[i][j].nextState = "DEAD";
                else if (
                  grid[i][j].currentState === "ALIVE" &&
                  (surroundings === 2 || surroundings === 3)
                )
                  grid[i][j].nextState = "ALIVE";
                else if (
                  grid[i][j].currentState === "ALIVE" &&
                  surroundings > 3
                )
                  grid[i][j].nextState = "DEAD";
                else if (
                  grid[i][j].currentState === "DEAD" &&
                  surroundings === 3
                )
                  grid[i][j].nextState = "ALIVE";
              }
            }
            for (let i = 0; i < rows; i++) {
              for (let j = 0; j < cols; j++) {
                if (
                  grid[i][j].nextState === "ALIVE" &&
                  grid[i][j].currentState === "ALIVE"
                )
                  ctx.fillStyle = "#1a202c";
                else if (
                  grid[i][j].nextState === "ALIVE" &&
                  grid[i][j].currentState === "DEAD"
                )
                  ctx.fillStyle = "#1a202c";
                else if (
                  grid[i][j].nextState === "DEAD" &&
                  grid[i][j].currentState === "ALIVE"
                )
                  ctx.fillStyle = "#cbd5e0";
                else if (
                  grid[i][j].nextState === "DEAD" &&
                  grid[i][j].currentState === "DEAD"
                )
                  ctx.fillStyle = "#f7fafc";
                grid[i][j].currentState = grid[i][j].nextState;
                ctx.fillRect(
                  j * blockSize,
                  i * blockSize,
                  j * blockSize + blockSize,
                  i * blockSize + blockSize
                );
              }
            }
            count++;
          } catch (err) {
            console.log(err);
          }
        }
      }
      id = requestAnimationFrame(renderCanvas);
    }
  }

  useEffect(() => {
    if (windowSize === undefined) return;
    const newGrid = new Array(rows).fill("x").map(() =>
      new Array(cols).fill("x").map(() => {
        return {
          currentState: Math.random() > 0.8 ? "ALIVE" : "DEAD",
          nextState: Math.random() > 0.8 ? "ALIVE" : "DEAD",
        };
      })
    );
    previousStates = {};
    setGrid(newGrid);
  }, [windowSize, reset]);

  useEffect(() => {
    if (grid === undefined) return;
    if (id) cancelAnimationFrame(id);
    id = requestAnimationFrame(renderCanvas);
  }, [grid]);

  return (
    <div className="relative flex flex-col items-center justify-center flex-1 w-full">
      <div
        className={`relative flex items-center justify-center flex-1 w-full ${
          overlayOpen ? "game-of-life-2-canvas" : ""
        }`}
      >
        <div className="overflow-hidden">
          <canvas
            ref={canvasRef}
            id="canvas"
            height={height}
            width={width}
            className=""
          ></canvas>
        </div>
        <div
          className="absolute border-8 border-gray-100 game-of-life-2-custom-inner-shadow"
          style={{ height: `${height}px`, width: `${width}px` }}
        />
        <div
          className={`absolute top-0 p-4 top-0 inset-x-0 z-40 sm:inset-x-auto m-4 max-w-4xl bg-gray-100 rounded-lg shadow-lg transition-all duration-1000 ease-in-out ${
            showCard ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1>The simulation was restarted because it devolved into a loop.</h1>
        </div>
        <button
          aria-label="restart"
          className="absolute bottom-0 left-0 p-2 m-4 font-semibold tracking-widest text-gray-100 transition-transform duration-300 ease-in transform bg-gray-900 rounded-full shadow-lg focus:outline-none focus:bg-gray-700 text-md sm:text-xl hover:bg-gray-800 hover:scale-110"
          onClick={() => setReset(reset + 1)}
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-100"
          >
            <path
              d="M4 4V9H4.58152M19.9381 11C19.446 7.05369 16.0796 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9M4.58152 9H9M20 20V15H19.4185M19.4185 15C18.2317 17.9318 15.3574 20 12 20C7.92038 20 4.55399 16.9463 4.06189 13M19.4185 15H15"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {overlayRendered && (
        <>
          <div
            className={`absolute inset-0 flex items-center justify-center bg-gray-900 transition-all duration-1000 ease-in-out ${
              overlayOpen ? "opacity-50" : "opacity-0 pointer-events-none"
            }`}
          ></div>
          <div
            className={`absolute inset-0 p-4 transition-all duration-1000 ease-in-out flex items-center justify-center ${
              overlayOpen ? "" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col items-center justify-center max-w-md px-6 py-6 transition-all duration-1000 ease-in-out bg-gray-100 rounded-lg shadow-2xl">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-900">
                Conway's Game of Life
              </h1>
              <p className="mt-4 text-justify text-gray-900">
                Conway's Game of Life is a rather famous cellular automata rule
                set created by John Horton Conway. The rules can be found on
                wikipedia{" "}
                <a
                  aria-label={"game of life wikipedia"}
                  className="text-blue-400"
                  href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
                >
                  here
                </a>
                . Implementing Conway's game of life is a relatively straight
                forward task. However, niave implementations can have fairly
                poor performance due to the overhead of rendering the grid at a
                high frame rate. This is made harder when writing a browser
                based implementation because browsers don't provide access to
                the underlying hardware on which the the simulation is being
                rendered. I used the{" "}
                <a
                  aria-label="canvas web api docs"
                  className="text-blue-400"
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
                >
                  Canvas Web API
                </a>{" "}
                and serveral transition calculation optimizations to overcome
                this challenge resulting in a relatively performant
                implementation. You can find my first (slightly less performant
                implementation){" "}
                <a
                  aria-label="other implementation"
                  className="text-blue-400"
                  href="/game-of-life"
                >
                  here
                </a>
                .
              </p>
              <button
                className="px-4 py-2 mt-6 text-gray-100 bg-gray-900 rounded-full shadow-lg hover:bg-gray-800 focus:outline-none focus:bg-gray-700"
                onClick={() => {
                  setOverlayOpen(false);
                  setTimeout(() => setOverlayRendered(false), 2000);
                }}
              >
                Let's See It In Action
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default () => (
  <NoSSR>
    <GOL />
  </NoSSR>
);
