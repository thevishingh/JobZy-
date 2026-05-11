"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Search,
  Briefcase,
  BriefcaseBusiness,
  Building2,
} from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "@/components/theme-provider"
import { Moon, Sun } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import { toast } from "sonner"
import axios, { AxiosError } from "axios"
import { USER_API_END_POINT } from "@/utils/constant"
import { setAuthUser } from "@/redux/authSlice"

interface NavItem {
  name: string
  to?: string
  description?: string
  hasDropdown?: boolean
  isPublic?: boolean
  roles?: ("student" | "recruiter")[]
}

const navItems: NavItem[] = [
  {
    name: "Home",
    to: "/",
    isPublic: true,
  },

  {
    name: "About",
    to: "/about",
    isPublic: true,
  },
  {
    name: "Pricing",
    to: "/pricing",
    isPublic: true,
  },

  {
    name: "Contact",
    to: "/contact",
    isPublic: true,
  },
  {
    name: "Jobs",
    to: "/jobs",
    description: "Explore the latest job opportunities",
    roles: ["student"],
  },

  {
    name: "Search Jobs",
    to: "/browse-jobs",
    description: "Find jobs based on skills and interests",
    roles: ["student"],
  },

  {
    name: "Companies",
    to: "/admin/companies",
    description: "Manage and organize company profiles",
    roles: ["recruiter"],
  },

  {
    name: "Admin Jobs",
    to: "/admin/jobs",
    description: "Create, manage, and track job postings",
    roles: ["recruiter"],
  },
]

export default function Header1() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  // theme toggle handler
  const ThemeToggleButton = () => (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black bg-background/80 text-foreground shadow-sm backdrop-blur transition hover:bg-muted"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-yellow-400" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  )

  // User
  const { user } = useSelector((store: RootState) => store.auth)

  // pages change effect
  const isSignupPage = location.pathname === "/signup"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // theme effect in header
  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    scrolled: {
      backdropFilter: "blur(20px)",
      backgroundColor:
        theme === "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    },
  }

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  }

  // distpatch
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // logout handler
  const handleLogout = async () => {
    try {
      const response = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      })

      if (response.status === 200 || response.data.success) {
        toast.success("Logged out successfully!")

        dispatch(setAuthUser(null))

        navigate("/login")
      }
    } catch (error) {
      const err = error as AxiosError<{ message: string }>

      console.log(err)

      toast.error(
        err.response?.data?.message ||
          err.message ||
          "Logout failed. Please try again."
      )
    }
  }

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "animate"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        backgroundColor: isScrolled
          ? theme === "dark"
            ? "rgba(0, 0, 0, 0.6)"
            : "rgba(255, 255, 255, 0.6)"
          : "transparent",
        boxShadow: isScrolled ? "0 8px 24px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              to={
                user?.role === "student"
                  ? "/jobs"
                  : user?.role === "recruiter"
                    ? "/admin/companies"
                    : "/"
              }
              className="group flex items-center gap-2.5"
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-2xl border border-border bg-background shadow-sm transition group-hover:scale-105">
                <div className="absolute inset-1 rounded-xl bg-linear-to-br from-rose-500 via-orange-500 to-red-600" />
                <Sparkles className="relative z-10 h-4.5 w-4.5 text-white" />
              </div>

              <div className="flex flex-col leading-none">
                <span className="font-unbounded text-xl font-bold tracking-wide text-amber-500">
                  Jobzy
                </span>
                <span className="hidden font-mont text-[10px] font-medium tracking-[0.22em] text-muted-foreground uppercase sm:block">
                  Careers Hub
                </span>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems
              .filter((item) => {
                // Guest mode
                if (!user) {
                  return item.isPublic
                }

                // Logged in users
                return item.roles?.includes(user.role)
              })
              .map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="group relative">
                    <Link
                      to={item.to || "#"}
                      className={`flex font-unbounded items-center space-x-1 font-medium transition-colors duration-200 hover:text-rose-500 dark:text-white dark:hover:text-lime-400 ${
                        isSignupPage ? "text-white" : "text-black"
                      }`}
                    >
                      <span>{item.name}</span>
                    </Link>

                    {item.description && (
                      <div className="pointer-events-none absolute top-full left-1/2 z-50 mt-3 hidden w-max max-w-60 -translate-x-1/2 rounded-xl border border-zinc-200 bg-white/95 px-3 py-2 text-xs leading-relaxed font-medium text-zinc-700 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm group-hover:block dark:border-zinc-700 dark:bg-zinc-900/95 dark:text-zinc-200">
                        <div className="absolute top-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-t border-l border-zinc-200 font-unbounded bg-white/95 dark:border-zinc-700 dark:bg-zinc-900/95" />
                        {item.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </nav>

          {!user ? (
            <div className="hidden items-center space-x-4 lg:flex">
              <ThemeToggleButton />
              <Link
                to="/login"
                className={`font-unbounded font-medium transition-colors duration-200 hover:text-lime-400 dark:text-white dark:hover:text-lime-400 ${
                  isSignupPage ? "text-white" : "text-black"
                }`}
              >
                Sign In
              </Link>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/signup"
                  className="inline-flex items-center space-x-2 rounded-full bg-linear-to-r from-rose-500 to-rose-700 px-6 py-2.5 font-unbounded font-medium text-white transition-all duration-200 hover:shadow-lg dark:text-white"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <ThemeToggleButton />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="group relative rounded-full ring-offset-background transition-all duration-200 outline-none hover:scale-105 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">
                    <Avatar className="h-10 w-10 cursor-pointer border border-border shadow-sm transition-all duration-200 group-hover:shadow-md">
                      <AvatarImage
                        src={user?.profile?.profilePicture || ""}
                        alt={user?.fullName || "User avatar"}
                      />
                      <AvatarFallback className="bg-muted text-sm font-semibold text-foreground">
                        {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>

                    <Badge className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full border-2 border-background bg-green-500 p-0 shadow-sm" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="max-h-[85vh] w-80 overflow-y-auto rounded-2xl border border-border bg-card p-0 text-card-foreground shadow-2xl"
                >
                  {/* User Header */}
                  <div className="bg-linear-to-br from-muted via-card to-card px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-11 w-11 shrink-0 border border-border shadow-sm">
                        <AvatarImage
                          src={user?.profile?.profilePicture || ""}
                          alt={user?.fullName || "User avatar"}
                        />
                        <AvatarFallback className="bg-muted text-sm font-semibold text-foreground">
                          {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>

                      <div className="min-w-0 flex-1">
                        <h4 className="truncate font-unbounded text-sm font-semibold text-foreground">
                          {user?.fullName}
                        </h4>

                        <p className="mt-0.5 truncate font-mont text-xs text-muted-foreground">
                          {user?.email}
                        </p>

                        <div className="mt-1.5 inline-flex items-center rounded-full border border-border bg-muted px-2 py-0.5 font-mont text-[10px] font-medium tracking-wide text-foreground capitalize">
                          {user?.role || "student"}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Desktop Details */}
                  <div className="hidden lg:block">
                    <div className="px-4 py-2.5">
                      <p className="mb-1 font-mont text-[10px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                        Bio
                      </p>

                      <p className="font-mont text-xs leading-5 text-muted-foreground">
                        {user?.profile?.bio?.trim()
                          ? user.profile.bio
                          : user?.role === "recruiter"
                            ? "Manage jobs, review applicants, and hire the right talent."
                            : "Explore jobs, build your profile, and apply with confidence."}
                      </p>
                    </div>

                    <Separator />

                    <div className="px-4 py-2.5">
                      <p className="mb-2 font-mont text-[10px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                        Account
                      </p>

                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between rounded-lg bg-muted px-3 py-1.5">
                          <span className="font-mont text-xs text-muted-foreground">
                            Role
                          </span>
                          <span className="font-mont text-xs font-medium text-foreground capitalize">
                            {user?.role}
                          </span>
                        </div>

                        <div className="flex items-center justify-between rounded-lg bg-muted px-3 py-1.5">
                          <span className="font-mont text-xs text-muted-foreground">
                            Status
                          </span>
                          <span className="inline-flex items-center gap-1.5 font-mont text-xs font-medium text-green-500">
                            <span className="h-2 w-2 rounded-full bg-green-500" />
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Mobile Role Links */}
                  <div className="p-1.5 lg:hidden">
                    {user?.role === "student" && (
                      <>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/jobs"
                            className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 font-mont text-sm text-foreground transition-all duration-200 outline-none hover:bg-muted"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors duration-200 group-hover:text-red-500">
                              <Briefcase className="h-4 w-4" />
                            </div>

                            <div className="flex flex-col">
                              <span className="font-medium">Jobs</span>
                              <span className="text-xs text-muted-foreground">
                                Explore latest opportunities
                              </span>
                            </div>
                          </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                          <Link
                            to="/browse-jobs"
                            className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 font-mont text-sm text-foreground transition-all duration-200 outline-none hover:bg-muted"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors duration-200 group-hover:text-red-500">
                              <Search className="h-4 w-4" />
                            </div>

                            <div className="flex flex-col">
                              <span className="font-medium">Search Jobs</span>
                              <span className="text-xs text-muted-foreground">
                                Find jobs based on your interests
                              </span>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}

                    {user?.role === "recruiter" && (
                      <>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/admin/companies"
                            className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 font-mont text-sm text-foreground transition-all duration-200 outline-none hover:bg-muted"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors duration-200 group-hover:text-red-500">
                              <Building2 className="h-4 w-4" />
                            </div>

                            <div className="flex flex-col">
                              <span className="font-medium">Companies</span>
                              <span className="text-xs text-muted-foreground">
                                Manage company profiles
                              </span>
                            </div>
                          </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                          <Link
                            to="/admin/jobs"
                            className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 font-mont text-sm text-foreground transition-all duration-200 outline-none hover:bg-muted"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors duration-200 group-hover:text-red-500">
                              <BriefcaseBusiness className="h-4 w-4" />
                            </div>

                            <div className="flex flex-col">
                              <span className="font-medium">Admin Jobs</span>
                              <span className="text-xs text-muted-foreground">
                                Manage job postings
                              </span>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}
                  </div>

                  {/* Profile Link */}
                  {user?.role === "student" && (
                    <>
                      <Separator />

                      <div className="p-1.5">
                        <DropdownMenuItem asChild>
                          <Link
                            to="/profile"
                            className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 font-mont text-sm text-foreground transition-all duration-200 outline-none hover:bg-muted"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors duration-200 group-hover:text-red-500">
                              <User className="h-4 w-4" />
                            </div>

                            <div className="flex flex-col">
                              <span className="font-medium">View Profile</span>
                              <span className="text-xs text-muted-foreground">
                                Manage your personal details
                              </span>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      </div>
                    </>
                  )}

                  <Separator />

                  {/* Logout */}
                  <div className="p-1.5">
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 font-mont text-sm text-red-500 transition-all duration-200 outline-none hover:bg-red-500/10 focus:bg-red-500/10"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                        <LogOut className="h-4 w-4" />
                      </div>

                      <div className="flex flex-col">
                        <span className="font-medium">Logout</span>
                        <span className="text-xs text-red-400">
                          Sign out from your account
                        </span>
                      </div>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {!user && (
            <motion.button
              className={`rounded-lg p-2 font-mont transition-colors duration-200 hover:bg-muted lg:hidden dark:text-white dark:hover:text-lime-400 ${
                isSignupPage ? "text-white" : "text-black"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          )}
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="overflow-hidden lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="mt-4 space-y-2 rounded-xl border border-border bg-background/95 py-4 shadow-xl backdrop-blur-lg">
                {navItems
                  .filter((item) => {
                    // Guest user
                    if (!user) {
                      return item.isPublic
                    }

                    // Logged in users
                    return (
                      item.name === "About" ||
                      item.name === "Pricing" ||
                      item.name === "Contact"
                    )
                  })
                  .map((item) => (
                    <Link
                      key={item.name}
                      to={item.to || "#"}
                      className="block px-4 py-3 font-medium text-foreground transition-colors duration-200 hover:bg-muted"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                {!user && (
                  <div className="space-y-2 px-4 py-2">
                    <Link
                      to="/login"
                      className="block w-full rounded-lg py-2.5 text-center font-medium text-foreground transition-colors duration-200 hover:bg-muted"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>

                    <Link
                      to="/signup"
                      className="block w-full rounded-lg bg-linear-to-r from-rose-500 to-rose-700 py-2.5 text-center font-medium text-white transition-all duration-200 hover:shadow-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
