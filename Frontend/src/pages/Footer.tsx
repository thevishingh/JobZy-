export default function Footer() {
  return (
    <footer className="w-full">
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

            <a
              href="#"
              className="inline-block rounded-full bg-red-600 px-5 py-2 text-xs text-white hover:bg-red-700"
            >
              Contact us
            </a>
          </div>

          {/* FOR JOB SEEKERS */}
          <div>
            <h4 className="mb-5 text-lg font-medium text-gray-900">
              For Candidates
            </h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Saved Jobs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Applications</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Profile</a></li>
            </ul>
          </div>

          {/* FOR RECRUITERS */}
          <div>
            <h4 className="mb-5 text-lg font-medium text-gray-900">
              For Recruiters
            </h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Post a Job</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Manage Jobs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Applicants</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Dashboard</a></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="mb-5 text-lg font-medium text-gray-900">
              Company
            </h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="mb-5 text-lg font-medium text-gray-900">
              Resources
            </h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
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
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-red-600 cursor-pointer">
                X
              </div>
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-red-600 cursor-pointer">
                IG
              </div>
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-red-600 cursor-pointer">
                IN
              </div>
              <div className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-red-600 cursor-pointer">
                YT
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}