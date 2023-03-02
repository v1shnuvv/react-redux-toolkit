import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementby10 } from "./features/counterSlice";
import Form from "./Form";

export default function App() {
  const dispatch = useDispatch();
  const { count1, count2 } = useSelector((state) => state.counter);
  const { name, age } = useSelector((state) => state.form);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <p>{count1}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
        <p>{count2}</p>
        <button onClick={() => dispatch(incrementby10())}>incrementby10</button>
      </div>
      <Form />
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
}
