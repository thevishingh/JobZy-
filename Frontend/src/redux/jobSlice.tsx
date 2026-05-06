import { createSlice } from "@reduxjs/toolkit"

interface JobState {
  allJobs: any[]
}

const initialState: JobState = {
  allJobs: [],
}

const jobSlice = createSlice({
  name: "job",

  initialState,

  reducers: {
    // action to set all jobs
    setAllJobs: (state, action: PayloadAction<any[]>) => {
      state.allJobs = action.payload
    },
  },
})

export const { setAllJobs } = jobSlice.actions

export default jobSlice.reducer
