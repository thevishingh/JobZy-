import { createSlice } from "@reduxjs/toolkit";

interface JobState {
  allJobs: any[];
  singleJob: any | null;
}

const initialState: JobState = {
  allJobs: [],
  singleJob: null,
};

const jobSlice = createSlice({
  name: "job",

  initialState,

  reducers: {
    // action to set all jobs
    setAllJobs: (state, action: PayloadAction<any[]>) => {
      state.allJobs = action.payload;
    },

    // action to set single job
    setSingleJobs: (state, action: PayloadAction<any>) => {
      state.singleJob = action.payload;
    },
  },
});

export const { setAllJobs, setSingleJobs } = jobSlice.actions;

export default jobSlice.reducer;