import { useDispatch, useSelector } from 'react-redux';

const ADD = 'ADD';
const SUB = 'SUB';
const ADDSOME = 'ADDSOME';
const SUBSOME = 'SUBSOME';
const RESET = 'RESET';

const addOne = () => ({ type: ADD });
const subOne = () => ({ type: SUB });
const addSome = (value) => ({ type: ADDSOME, payload: value });
const subSome = (value) => ({ type: SUBSOME, payload: value });
const reset = () => ({ type: RESET });

const CountReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case ADD:
      return { counter: state.counter + 1 };
    case SUB:
      return { counter: state.counter - 1 };
    case ADDSOME:
      return { counter: state.counter + action.payload };
    case SUBSOME:
      return { counter: state.counter - action.payload };
    case RESET:
      return { counter: 0 };
    default:
      return state;
  }
};

function CounterRedux() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <p>Count is: {counter}</p>
      <div>
        <button type="button" onClick={() => dispatch(addOne())}>
          Add 1
        </button>
        <button type="button" onClick={() => dispatch(subOne())}>
          Decrease 1
        </button>
        <button type="button" onClick={() => dispatch(addSome(10))}>
          Add 10
        </button>
        <button type="button" onClick={() => dispatch(subSome(10))}>
          Decrease 10
        </button>
        <button type="button" onClick={() => dispatch(reset())}>
          Reset count
        </button>
      </div>
    </div>
  );
}

export { CountReducer, CounterRedux };
