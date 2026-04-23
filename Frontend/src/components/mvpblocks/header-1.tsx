"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LogOut, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useTheme } from "next-themes"

interface NavItem {
  name: string
  to: string
  hasDropdown?: boolean
  dropdownItems?: { name: string; to: string; description?: string }[]
}

const navItems: NavItem[] = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Jobs", to: "/jobs" },
  // {
  //   name: 'Products',
  //   to: '/products',
  //   hasDropdown: true,
  //   dropdownItems: [
  //     {
  //       name: 'Analytics',
  //       to: '/analytics',
  //       description: 'Track your metrics',
  //     },
  //     {
  //       name: 'Dashboard',
  //       to: '/dashboard',
  //       description: 'Manage your data',
  //     },
  //     { name: 'Reports', to: '/reports', description: 'Generate insights' },
  //   ],
  // },
  { name: "Pricing", to: "/pricing" },
  { name: "Contact", to: "/contact" },
]

export default function Header1() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { theme } = useTheme()

  // Activity
  const user: boolean = false

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
            ? "rgba(0, 0, 0, 0.8)"
            : "rgba(255, 255, 255, 0.8)"
          : "transparent",
        boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-rose-500 to-rose-700">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-xl font-bold text-transparent">
                Acme Inc.
              </span>
            </Link>
          </motion.div>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.to}
                  className="flex items-center space-x-1 font-medium text-foreground transition-colors duration-200 hover:text-rose-500"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  )}
                </Link>

                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 overflow-hidden rounded-xl border border-border bg-background/95 shadow-xl backdrop-blur-lg"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.to}
                            className="block px-4 py-3 transition-colors duration-200 hover:bg-muted"
                          >
                            <div className="font-medium text-foreground">
                              {dropdownItem.name}
                            </div>
                            {dropdownItem.description && (
                              <div className="text-sm text-muted-foreground">
                                {dropdownItem.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {!user ? (
            <div className="hidden items-center space-x-4 lg:flex">
              <Link
                to="/login"
                className="font-medium text-foreground transition-colors duration-200 hover:text-rose-500"
              >
                Sign In
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/signup"
                  className="inline-flex items-center space-x-2 rounded-full bg-linear-to-r from-rose-500 to-rose-700 px-6 py-2.5 font-medium text-white transition-all duration-200 hover:shadow-lg"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <button className="relative rounded-full ring-offset-background transition outline-none hover:scale-105 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">
                  <Avatar className="h-10 cursor-pointer w-10 border border-gray-200 shadow-sm">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                      alt="User avatar"
                    />
                    <AvatarFallback>TS</AvatarFallback>
                  </Avatar>

                  <Badge className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full bg-green-500 p-0" />
                </button>
              </PopoverTrigger>

              <PopoverContent
                align="end"
                className="w-72 rounded-2xl border border-gray-200 bg-white p-0 shadow-xl"
              >
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border border-gray-200">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                        alt="User avatar"
                      />
                      <AvatarFallback>TS</AvatarFallback>
                    </Avatar>

                    <div className="min-w-0">
                      <h4 className="truncate font-unbounded text-sm font-semibold text-gray-900">
                        Thevishingh
                      </h4>
                      <p className="truncate font-mont text-xs text-gray-500">
                        Frontend Developer
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 font-mont text-sm leading-5 text-gray-600">
                    Building JobZy — a modern job portal for students and
                    recruiters.
                  </p>
                </div>

                <Separator />

                <div className="p-2">
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 font-mont text-sm text-gray-700 transition hover:bg-gray-100"
                  >
                    <User className="h-4 w-4 text-gray-500" />
                    View Profile
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      console.log("logout clicked")
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 font-mont text-sm text-red-600 transition hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}

          <motion.button
            className="rounded-lg p-2 transition-colors duration-200 hover:bg-muted lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
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
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="block px-4 py-3 font-medium text-foreground transition-colors duration-200 hover:bg-muted"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
