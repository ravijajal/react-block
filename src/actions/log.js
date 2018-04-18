import { LOG_CELL, LOG_CELL_CREATED } from "../types/log";
import { COLORS } from "../types/color";

export const logCell = (row, col, no, color, logType) => ({
  type: LOG_CELL,
  row,
  col,
  no,
  color,
  logType
});

export const populateLog = (rows, cols) => dispatch => {
  let count = 1;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dispatch(logCell(row, col, count++, COLORS[0], LOG_CELL_CREATED));
    }
  }
};
