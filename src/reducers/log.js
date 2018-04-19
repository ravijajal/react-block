import { LOG_CELL } from "../types/log";

const initialState = {
  logs: []
};

const log = (state, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }
  switch (action.type) {
    case LOG_CELL:
      return {
        ...state,
        logs: [
          ...state.logs,
          {
            row: action.row,
            col: action.col,
            no: action.no,
            visitCount: action.visitCount,
            logType: action.logType
          }
        ]
      };
    default:
      return state;
  }
};
export default log;
