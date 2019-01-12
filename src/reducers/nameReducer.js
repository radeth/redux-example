const nameReducer = (state = { name: "max" }, action) => {
  switch (action.type) {
    case "SET_NAME":
      return (state = {
        ...state,
        name: action.payload
      });
      break;
    default:
      return state;
  }
};
export default nameReducer;
