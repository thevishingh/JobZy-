import React from "react"
import { BiPlayCircle } from "react-icons/bi"

const Home: React.FC = () => {
  return (
    <div className="bg-linear-to-b from-green-50 to-green-100">
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                Collaborate seamlessly with{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-x-0 bottom-0 border-b-30 border-[#4ADE80]"></span>
                  <span className="relative">AuraUI</span>
                </span>
              </h1>

              <p className="mt-8 text-base text-black sm:text-xl">
                Empower your team with AuraUI&apos;s tools for effortless
                collaboration and productivity. Streamline your workflow with
                our cutting-edge solutions.
              </p>

              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="#"
                  title="Start exploring"
                  className="inline-flex items-center justify-center bg-orange-500 px-10 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-orange-600 focus:bg-orange-600"
                  role="button"
                >
                  Start exploring
                </a>

                <a
                  href="#"
                  title="Watch video"
                  className="mt-6 inline-flex items-center text-base font-semibold transition-all duration-200 hover:opacity-80 sm:mt-0"
                >
                  <BiPlayCircle className="mr-3 h-10 w-10 text-orange-500" />
                  Watch video
                </a>
              </div>
            </div>

            <div>
              <img
                className="w-full"
                src="https://www.auraui.com/memeimage/hero25.png"
                alt="AuraUI Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
