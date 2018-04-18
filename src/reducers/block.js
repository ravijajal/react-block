import { MARK_CELL, POPULATE_BLOCK } from "../types/block";

const initialState = {
  blockRows: []
};

const block = (state, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }
  switch (action.type) {
    case MARK_CELL:
      return {
        ...state,
        blockRows: state.blockRows.map((rows, row) =>
          rows.map(
            (cells, col) =>
              row === action.row && col === action.col
                ? {
                    ...cells,
                    visitCount:
                      cells.visitCount + 1 > 4 ? 0 : cells.visitCount + 1
                  }
                : cells
          )
        )
      };
    case POPULATE_BLOCK:
      return {
        ...state,
        blockRows: action.blockRows
      };
    default:
      return state;
  }
};
export default block;
