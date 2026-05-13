import { setAllCompanies } from "@/redux/companySlice"
import { COMPANY_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function useGetAllCompany() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchAllCompanyData = async () => {
      try {
        const response = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          withCredentials: true,
        })

        console.log(response.data)

        if (response.data.success) {
          dispatch(setAllCompanies(response.data.companies))
        }
      } catch (error) {
        console.error("Error fetching companies:", error)
      }
    }

    fetchAllCompanyData()
  }, [dispatch])
}
