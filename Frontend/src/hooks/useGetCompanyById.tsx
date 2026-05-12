import { setSingleCompany } from "@/redux/companySlice"
import { setAllJobs } from "@/redux/jobSlice"
import { COMPANY_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function useGetCompanyById(companyId: string) {
  // distpatch
  const distpatch = useDispatch()
  return useEffect(() => {
    const fetchSingleCompanyData = async () => {
      try {
        const response = await axios.get(
          `${COMPANY_API_END_POINT}/ge/${companyId}`,
          {
            withCredentials: true,
          }
        )

        if (response.data.success) {
          distpatch(setSingleCompany(response.data.company))
        }
      } catch (error) {
        console.error("Error fetching jobs:", error)
      }
    }

    // calling  function
    fetchSingleCompanyData()
  }, [companyId, distpatch])
}
