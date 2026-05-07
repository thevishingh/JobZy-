import { setSingleJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useGetSingleJobs({ jobId }) {
    const dispatch = useDispatch();
    return useEffect(() => {
        const getSingleJobs = async () => {
            try {
                const fetchSingleJobs = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
                    withCredentials: true,
                });
                if (fetchSingleJobs.data.success) {
                    dispatch(setSingleJobs(fetchSingleJobs.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        };

        // calling the function
        getSingleJobs();
    }, []);
}
