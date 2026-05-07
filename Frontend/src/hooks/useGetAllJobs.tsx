import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useGetAllJobs() {
    // distpatch
    const distpatch = useDispatch();
    return useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${JOB_API_END_POINT}/get`, {
                    withCredentials: true,
                });

                if (response.data.success) {
                    distpatch(setAllJobs(response.data.jobs));
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        // calling  function
        fetchJobs();
    }, []);
}
