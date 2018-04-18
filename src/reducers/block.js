import { MARK_CELL, POPULATE_BLOCK } from "../types/block";

const initialState = {
  blocks: []
};

const block = (state, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }
  switch (action.type) {
    case MARK_CELL:
      return {
        ...state,
        blocks: state.blocks.map((rows, row) =>
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
        blocks: action.blocks
      };
    default:
      return state;
  }
};
export default block;
