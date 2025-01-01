import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/features/counter/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    // remember to call the increment
    dispatch(increment(amount));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <div>
        <h1>Counter with Redux</h1>
        <button onClick={() => handleIncrement(5)}>Increment By 5</button>
        <button onClick={() => dispatch(decrement())}>Increment</button>
        <div>{count}</div>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
