const initial = 0;
const change = (state = initial, action) => {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;

    default:
      return state;
  }
};
export default change;
