import { Button } from "./components/ui/button";
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
        <Button onClick={() => handleIncrement(5)}>Increment By 5</Button>
        <Button onClick={() => dispatch(increment(1))}>Increment</Button>
        <div>{count}</div>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
    </>
  );
}

export default App;
