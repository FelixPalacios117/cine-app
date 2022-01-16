import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  name: '',
  row: 0,
  column: 0,
  capacity: 0,
  disable: ''
}

export const salaLayoutSlice = createSlice({
  name: 'salaLayout',
  initialState,
  reducers: {
    setSala: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name
      state.row = action.payload.row
      state.column = action.payload.column
      state.disable = action.payload.disable
    },
    setDisable: (state, action) => {
      state.disable = action.payload;
    },
    reset: (state) => {
      state = initialState;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSala, setDisable, reset } = salaLayoutSlice.actions

export default salaLayoutSlice.reducer