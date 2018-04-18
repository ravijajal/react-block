import { MARK_CELL, POPULATE_BLOCK } from "../types/block";

export const markCell = (row, col) => ({
  type: MARK_CELL,
  row,
  col
});
const setBlock = blockRows => ({
  type: POPULATE_BLOCK,
  blockRows: blockRows
});

export const populateBlock = (rows, cols) => dispatch => {
  let blockRows = [];
  for (let row = 0; row < rows; row++) {
    let rowCells = [];
    for (let col = 0; col < cols; col++) {
      rowCells.push({visitCount: 0 });
    }
    blockRows.push(rowCells);
  }
  dispatch(setBlock(blockRows));
};
