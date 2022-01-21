import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import salaLayoutReducer from "./salaSlice";
import compraBoletosReducer from "./compraBoletosSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    salaLayout: salaLayoutReducer,
    compraBoleto: compraBoletosReducer,
  },
});
