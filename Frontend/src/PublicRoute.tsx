import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"

type PublicRouteProps = {
  children: React.ReactNode
}

export default function PublicRoute({ children }: PublicRouteProps) {
  const { user } = useSelector((store: RootState) => store.auth)

  if (user?.role === "student") {
    return <Navigate to="/jobs" replace />
  }

  if (user?.role === "recruiter") {
    return <Navigate to="/admin/jobs" replace />
  }

  return children
}
