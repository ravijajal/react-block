import { LOG_CELL, LOG_CELL_CREATED } from "../types/log";
import { COLORS } from "../types/color";

export const logCell = (row, col, no, visitCount, logType) => ({
  type: LOG_CELL,
  row,
  col,
  no,
  visitCount,
  logType
});

export const populateLog = (rows, cols) => dispatch => {
  let count = 1;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dispatch(logCell(row, col, count++, 0, LOG_CELL_CREATED));
    }
  }
};
