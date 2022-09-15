const initialState = { count: 0, payload: {} };

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "DATOS":
      return {
        ...state,
        payload: action.payload
      };

    default:
      return state;
  }
}
