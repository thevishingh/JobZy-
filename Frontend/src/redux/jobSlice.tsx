import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface JobState {
  allJobs: any[]
  allAdminJobs: []
  singleJob: any | null
  allAppliedJobs:[]
}

const initialState: JobState = {
  allJobs: [],
  allAdminJobs: [],
  singleJob: null,
  allAppliedJobs:[]
}

const jobSlice = createSlice({
  name: "job",

  initialState,

  reducers: {
    // action to set all jobs
    setAllJobs: (state, action: PayloadAction<any[]>) => {
      state.allJobs = action.payload
    },

    // action to set single job
    setSingleJobs: (state, action: PayloadAction<any>) => {
      state.singleJob = action.payload
    },

    // set All admin jobs
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload
    },

    setAllAppliedJobs: (state,action)=>{
      state.allAppliedJobs = action.payload
    }

  },
})

export const { setAllJobs, setSingleJobs, setAllAdminJobs, setAllAppliedJobs } = jobSlice.actions

export default jobSlice.reducer
