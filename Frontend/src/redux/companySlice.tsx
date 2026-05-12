import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  singleCompany: null,
}

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload
    },
    clearSingleCompany: (state) => {
      state.singleCompany = null
    },
  },
})

export const { setSingleCompany, clearSingleCompany } = companySlice.actions
export default companySlice.reducer
