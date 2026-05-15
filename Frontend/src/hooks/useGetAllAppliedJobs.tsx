import { setAllAppliedJobs, setAllJobs } from "@/redux/jobSlice"
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function useGetAllAppliedJobs() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchAllAppliedJobs = async () => {
      try {
        const response = await axios.get(`${APPLICATION_API_END_POINT}/get`, {
          withCredentials: true,
        })

        console.log("API response:", response.data)

        if (response.data.success) {
          dispatch(setAllAppliedJobs(response.data.application))
        }
      } catch (error) {
        console.error("Error fetching jobs:", error)
      }
    }

    fetchAllAppliedJobs()
  }, [dispatch])
}
