import "./styles.css";
import { incNumber, decNumber } from "./action/index";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const mystate = useSelector((state) => state.change);
  const dispatch = useDispatch();
  console.log(mystate);
  return (
    <div className="App">
      <button onClick={() => dispatch(incNumber())}>+</button>
      {mystate}
      <button onClick={() => dispatch(decNumber())}>-</button>
    </div>
  );
}
