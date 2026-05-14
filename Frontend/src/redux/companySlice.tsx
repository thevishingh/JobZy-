import { createSlice } from "@reduxjs/toolkit"

interface Company {
  _id: string
  name: string
}

interface CompanyState {
  allCompanies: Company[]
}

const initialState: CompanyState = {
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
