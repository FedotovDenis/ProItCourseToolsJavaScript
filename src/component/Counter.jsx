import { useReducer } from 'react'; // Імпортуємо хук useState для управління станом компоненту

const initialState = 0;

function Counter() {
  function countyerReducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(countyerReducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        -
      </button>
      <span>{state}</span>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
  );
}

export default Counter; // Експортуємо компонент Counter для використання в інших файлах
