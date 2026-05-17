import { lazy, Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Footer from "./components/shared/Footer"
import ProtectedRoute from "./ProtectedRoute"
import { useSelector } from "react-redux"
import type { RootState } from "./redux/store"
import PremiumLoader from "./components/shared/PremiumLoader"
import ScrollToTop from "./components/shared/ScrollToTop"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Jobs = lazy(() => import("./components/students/JobsPage"))
const Pricing = lazy(() => import("./pages/Pricing"))
const Contact = lazy(() => import("./pages/Contact"))
const Login = lazy(() => import("./pages/Login"))
const Register = lazy(() => import("./pages/Register"))
const BrowseJobs = lazy(() => import("./components/students/BrowseJobs"))
const Profile = lazy(() => import("./components/students/Profile"))
const JobsDetails = lazy(() => import("./components/students/JobsDetails"))
const RecruiterJobs = lazy(() => import("./components/admin/RecruiterJobs"))
const ErrorPage = lazy(() => import("./pages/ErrorPage"))
const Company = lazy(() => import("./components/admin/Company"))
const UpdateCompanyPage = lazy(
  () => import("./components/admin/UpdateCompanyPage")
)
const UpdateJobPage = lazy(() => import("./components/admin/UpdateJobPage"))
const Applicants = lazy(() => import("./components/admin/ApplicantsPage"))
const ComingSoonConstruction = lazy(
  () => import("./components/shared/ComingSoon")
)
const JobzyPrivacyPage = lazy(() => import("./pages/privacyPage"))

export function App() {
  const { pathname } = useLocation()
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
    "/privacy-policy",
    "/browse-jobs",
    "/profile",
    "/admin/jobs",
    "/admin/companies",
    "/admin/jobs/new-jobs",
  ]

  const validDynamicRoutes = [
    /^\/job-details\/[^/]+$/,
    /^\/admin\/companies\/details-update\/[^/]+$/,
    /^\/admin\/jobs\/[^/]+\/applicants$/,
    /^\/coming-soon\/[^/]+$/,
  ]

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
      {/* Scroll to top */}
      <ScrollToTop />

      {!shouldHideNav && <Navbar />}

      <main className="relative flex-1">
        <Suspense fallback={<PremiumLoader />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/privacy-policy" element={<JobzyPrivacyPage />} />
            <Route
              path="/coming-soon/:feature"
              element={<ComingSoonConstruction />}
            />
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
              path="/admin/jobs/:id/applicants"
              element={
                <ProtectedRoute allowedRoles={["recruiter"]}>
                  <Applicants />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/jobs/new-jobs"
              element={
                <ProtectedRoute allowedRoles={["recruiter"]}>
                  <UpdateJobPage />
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
              path="/admin/companies/details-update/:id"
              element={
                <ProtectedRoute allowedRoles={["recruiter"]}>
                  <UpdateCompanyPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </main>

      {!shouldHideFooter && <Footer />}
    </div>
  )
}

export default App
