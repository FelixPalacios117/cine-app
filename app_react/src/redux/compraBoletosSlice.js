import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idFuncion: "",
  seleccionBoletos: "",
};

export const compraBoletosSlice = createSlice({
  name: "compraBoleto",
  initialState,
  reducers: {
    setBoletos: (state, action) => {
      state.seleccionBoletos = action.payload;
    },
    setIdFuncion: (state, action) => {
      state.idFuncion = action.payload;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBoletos, setIdFuncion, reset } = compraBoletosSlice.actions;

export default compraBoletosSlice.reducer;
