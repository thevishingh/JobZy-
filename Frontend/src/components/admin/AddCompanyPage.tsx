import React from "react";
import { Building2, Globe, MapPin, FileText, ImageIcon, PlusCircle } from "lucide-react";

export default function AddCompanyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-[#0b0f19] dark:text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-500/10 dark:via-transparent dark:to-purple-500/10" />

          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                <PlusCircle className="h-4 w-4" />
                Add a new company
              </div>

              <h1 className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                Create a company profile that looks clean and professional
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base">
                Add your company details, website, location, brand logo, and description in one place.
                This form is designed for recruiters and hiring teams who want a smooth and modern workflow.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                  <p className="text-sm font-semibold">Fast onboarding</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Add company details in minutes</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                  <p className="text-sm font-semibold">Recruiter friendly</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Simple layout and clear fields</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/5">
                <Building2 className="mb-3 h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-sm font-semibold">Company identity</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Name, logo, and short description.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/5">
                <Globe className="mb-3 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-sm font-semibold">Website link</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Add the company’s public website.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/5">
                <MapPin className="mb-3 h-5 w-5 text-rose-600 dark:text-rose-400" />
                <h3 className="text-sm font-semibold">Location details</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Help candidates understand where the company is based.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/5">
                <ImageIcon className="mb-3 h-5 w-5 text-violet-600 dark:text-violet-400" />
                <h3 className="text-sm font-semibold">Brand presence</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Upload or link a company logo for better branding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-6 lg:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Company details
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Fill in the details below to create a new company profile.
            </p>
          </div>

          <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Company Name
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-blue-400"
                />
              </div>
            </div>

            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Website
              </label>
              <div className="relative">
                <Globe className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                <input
                  type="url"
                  placeholder="https://company.com"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-blue-400"
                />
              </div>
            </div>

            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="e.g. Pune, India"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-blue-400"
                />
              </div>
            </div>

            <div className="md:col-span-1">
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Logo URL
              </label>
              <div className="relative">
                <ImageIcon className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Paste logo URL"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-blue-400"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                <textarea
                  rows={5}
                  placeholder="Write a short description about the company..."
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-blue-400"
                />
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="rounded-2xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-2xl bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Save Company
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}