import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import About from "./pages/About"
import Jobs from "./pages/JobsPage"
import Pricing from "./pages/Pricing"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Footer from "./pages/Footer"
import BrowseJobs from "./components/shared/BrowseJobs"
import Profile from "./components/shared/Profile"
import JobsDetails from "./components/shared/JobsDetails"
import RecruiterJobs from "./components/admin/RecruiterJobs"
import ProtectedRoute from "./ProtectedRoute"
import ErrorPage from "./pages/ErrroPage"
import { useSelector } from "react-redux"
import type { RootState } from "./redux/store"
import Company from "./components/admin/Company"
import AddCompanyPage from "./components/admin/AddCompanyPage"
import Home from "./pages/Home"

export function App() {
  const { pathname } = useLocation()
  // user
  const { user } = useSelector((store: RootState) => store.auth)

  const hideFooterOnlyRoutes = ["/login", "/signup"]
  const hideNavFooterRoutes = ["/unauthorized"]

  const validStaticRoutes = [
    "/",
    "/about",
    "/pricing",
    "/contact",
    "/login",
    "/signup",
    "/unauthorized",
    "/jobs",
    "/browse-jobs",
    "/profile",
    "/admin/jobs",
    "/admin/companies",
    "/admin/companies/new",
  ]

  const validDynamicRoutes = [/^\/job-details\/[^/]+$/]

  const isValidStaticRoute = validStaticRoutes.includes(pathname)

  const isValidDynamicRoute = validDynamicRoutes.some((route) =>
    route.test(pathname)
  )

  const isError404 = !isValidStaticRoute && !isValidDynamicRoute

  const shouldHideNav = hideNavFooterRoutes.includes(pathname) || isError404

  const shouldHideFooter =
    hideFooterOnlyRoutes.includes(pathname) ||
    hideNavFooterRoutes.includes(pathname) ||
    isError404

  return (
    <div className="flex min-h-screen flex-col">
      {!shouldHideNav && <Navbar />}

      <main className="flex-1">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/unauthorized" element={<ErrorPage user={user} />} />
          <Route path="*" element={<ErrorPage user={user} />} />

          {/* Student Protected Routes */}
          <Route
            path="/jobs"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <Jobs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/job-details/:id"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <JobsDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/browse-jobs"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <BrowseJobs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Recruiter Protected Routes */}
          <Route
            path="/admin/jobs"
            element={
              <ProtectedRoute allowedRoles={["recruiter"]}>
                <RecruiterJobs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/companies"
            element={
              <ProtectedRoute allowedRoles={["recruiter"]}>
                <Company />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/companies/new"
            element={
              <ProtectedRoute allowedRoles={["recruiter"]}>
                <AddCompanyPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {!shouldHideFooter && <Footer />}
    </div>
  )
}

export default App
