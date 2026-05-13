import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allCompanies: [],
}

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setAllCompanies: (state, action) => {
      state.allCompanies = action.payload || []
    },
  },
})

export const { setAllCompanies } = companySlice.actions

export default companySlice.reducer
