import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"

type PublicRouteProps = {
  children: React.ReactNode
}

export default function PublicRoute({ children }: PublicRouteProps) {
  const { user } = useSelector((store: RootState) => store.auth)

  if (user) {
    return <Navigate to="/" replace />
  }

  return children
}
