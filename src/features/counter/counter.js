import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { Nav } from "../nav";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Nav />
      <section>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            style={{ marginRight: "16px" }}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            style={{ marginLeft: "16px" }}
          >
            Decrement
          </button>
        </div>
        <button
          aria-label="Increment by 5"
          onClick={() => dispatch(incrementByAmount(5))}
          style={{ marginTop: "16px" }}
        >
          Increment by 5
        </button>
      </section>
    </div>
  );
}
