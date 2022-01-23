import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idFuncion: "",
  seleccionBoletos: "",
  subtotal: 0,
};

export const compraBoletosSlice = createSlice({
  name: "compraBoleto",
  initialState,
  reducers: {
    setBoletos: (state, action) => {
      state.seleccionBoletos = action.payload;
    },
    setSubtotal: (state, action) => {
      state.subtotal += action.payload;
    },
    setIdFuncion: (state, action) => {
      state.idFuncion = action.payload;
    },
    reset: (state) => {
      state.idFuncion = "";
      state.seleccionBoletos = "";
      state.subtotal = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBoletos, setIdFuncion, setSubtotal, reset } =
  compraBoletosSlice.actions;

export default compraBoletosSlice.reducer;
