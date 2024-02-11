import { configureStore } from "@reduxjs/toolkit";
import { CountReducer } from "./component/CounterRedux";

const store = configureStore({
  reducer: CountReducer,
});

export default store;
