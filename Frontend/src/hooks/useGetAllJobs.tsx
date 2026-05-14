import { setAllJobs } from "@/redux/jobSlice"
import { JOB_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function useGetAllJobs() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${JOB_API_END_POINT}/get`, {
          withCredentials: true,
        })

        console.log("API response:", response.data)

        if (response.data.success) {
          dispatch(setAllJobs(response.data.jobs))
        }
      } catch (error) {
        console.error("Error fetching jobs:", error)
      }
    }

    fetchJobs()
  }, [dispatch])
}
