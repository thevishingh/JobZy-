import { setAllAdminJobs } from "@/redux/jobSlice"
import { JOB_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function useGetAllAdminJobs() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchAdminAllJobs = async () => {
      try {
        const response = await axios.get(`${JOB_API_END_POINT}/recruiterJobs`, {
          withCredentials: true,
        })

        console.log("Admin jobs response:", response.data)

        if (response.data.success) {
          dispatch(setAllAdminJobs(response.data.jobs || []))
        }
      } catch (error: any) {
        console.error("Error fetching admin jobs:", error)
        console.log("Error response:", error.response?.data)
      }
    }

    fetchAdminAllJobs()
  }, [dispatch])
}
