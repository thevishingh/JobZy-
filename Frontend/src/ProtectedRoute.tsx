import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"

type ProtectedRouteProps = {
  children: React.ReactNode
  allowedRoles?: string[]
}

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const { user } = useSelector((store: RootState) => store.auth)

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  return children
}
