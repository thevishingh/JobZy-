import TextHoverEffectDemo from "@/components/text-hover-effect-demo"
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-white to-red-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP GRID */}
        <div className="grid grid-cols-2 gap-3 gap-y-8 py-10 sm:grid-cols-4 lg:grid-cols-6">
          {/* LOGO + ABOUT */}
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <h2 className="text-2xl font-bold text-gray-900">
              Job<span className="text-red-500">Zy</span>
            </h2>

            <p className="py-6 text-sm text-gray-500 lg:max-w-xs">
              JobZy is your all-in-one job portal to discover opportunities,
              connect with recruiters, and grow your career faster.
            </p>

            <Link
              to="/contact"
              className="inline-block rounded-full bg-red-600 px-5 py-2 text-xs text-white transition hover:bg-red-700"
            >
              Contact Us
            </Link>
          </div>

          {/* FOR CANDIDATES */}
          <div>
            <h4 className="mb-5 text-lg font-medium text-gray-900">
              For Candidates
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/jobs"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Browse Jobs
                </Link>
              </li>

              <li>
                <Link
                  to="/saved-jobs"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Saved Jobs
                </Link>
              </li>

              <li>
                <Link
                  to="/applications"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Applications
                </Link>
              </li>

              <li>
                <Link
                  to="/profile"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* FOR RECRUITERS */}
          <div>
            <h4 className="mb-5 text-lg font-medium text-gray-900">
              For Recruiters
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/post-job"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Post a Job
                </Link>
              </li>

              <li>
                <Link
                  to="/manage-jobs"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Manage Jobs
                </Link>
              </li>

              <li>
                <Link
                  to="/applicants"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Applicants
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="mb-5 text-lg font-medium text-gray-900">Company</h4>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/careers"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="mb-5 text-lg font-medium text-gray-900">
              Resources
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/help-center"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  to="/faqs"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 transition hover:text-gray-900"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <span className="text-sm text-gray-500">
              © 2026 JobZy. All rights reserved.
            </span>

            <div className="flex space-x-4">
              <Link
                to="/x"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition hover:scale-110"
              >
                <FaXTwitter />
              </Link>

              <Link
                to="/instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-white transition hover:scale-110"
              >
                <FaInstagram />
              </Link>

              <Link
                to="/linkedin"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition hover:scale-110"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                to="/youtube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white transition hover:scale-110"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <TextHoverEffectDemo />
    </footer>
  )
}
