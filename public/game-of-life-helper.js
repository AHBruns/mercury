importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

const GOLHelper = {
  calculateNewRow(i, grid) {
    const determineNextState = (i, j, grid) => {
      let rowIndex = i - 1;
      let colIndex = j - 1;
      let count = 0;
      const cell = grid[i][j];
      while (rowIndex <= i + 1) {
        if (!(rowIndex < 0) && !(rowIndex > grid.length - 1)) {
          while (colIndex <= j + 1) {
            if (
              !(colIndex < 0) &&
              !(colIndex > grid[rowIndex].length - 1) &&
              grid[rowIndex][colIndex].currentState &&
              colIndex !== i &&
              rowIndex !== j
            ) {
              count += 1;
            }
            colIndex += 1;
          }
        }
        colIndex = j - 1;
        rowIndex += 1;
      }
      if (cell.currentState && count < 2) return false;
      if (cell.currentState && count > 1 && count < 4) return true;
      if (cell.currentState && count > 3) return false;
      if (!cell.currentState && count === 3) return true;
    };
    try {
      const newRow = new Array(grid[i].length).fill(1).map((_, j) => {
        return {
          currentState: determineNextState(i, j, grid),
        };
      });
      return newRow;
    } catch (err) {
      return null;
    }
  },
};

Comlink.expose(GOLHelper);
