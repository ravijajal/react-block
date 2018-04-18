import { combineReducers } from "redux";
import { MARK_CELL, POPULATE_CELLS } from "../actions";

const block = (state, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }
  switch (action.type) {
    case MARK_CELL:
      return {
        ...state,
        cells: state.cells.map(
          cells =>
            cells.row === action.row && cells.col === action.col
              ? { ...cells, isVisited: true }
              : cells
        )
      };
    case POPULATE_CELLS:
      return {
        ...state,
        cells: action.cells
      };
    default:
      return state;
  }
};

const initialState = {
  cells: []
};

const rootReducer = combineReducers({
  block
});

export default rootReducer;
