import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

type AuthState = {
  loading: boolean
  user: any // Replace 'any' with the actual user type if available
}

const initialState: AuthState = {
  loading: false,
  user: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setAuthUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    },
  },
})

export const { setLoading, setAuthUser } = authSlice.actions
export default authSlice.reducer
