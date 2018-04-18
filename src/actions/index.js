export const MARK_CELL = "MARK_CELL";
export const POPULATE_CELLS = "POPULATE_CELLS";

export const markCell = (row, col) => ({
  type: MARK_CELL,
  row,
  col
});
const setCells = cells => ({
  type: POPULATE_CELLS,
  cells: cells
});

export const populateCells = (rows, cols) => dispatch => {
  let cells = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      cells.push({ row: row, col: col, isVisited: false });
    }
  }
  dispatch(setCells(cells));
};
