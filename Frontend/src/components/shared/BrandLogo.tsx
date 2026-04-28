import React from "react"
import { ArrowDownRight } from "lucide-react"

type Logo = {
  src: string
  alt: string
  hidden?: boolean
  height?: string
}

const logos: Logo[] = [
  {
    src: "https://www.auraui.com/logo-light.png",
    alt: "Auraui Light",
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/logo10.png",
    alt: "Auraui Logo 10",
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/cocacola.svg",
    alt: "Coca-Cola",
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/kirak.png",
    alt: "Kirak",
    height: "h-7",
  },
  {
    src: "https://www.auraui.com/logos/logo1.svg",
    alt: "Auraui Logo 1",
    hidden: true,
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/logo2.webp",
    alt: "Auraui Logo 2",
    hidden: true,
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/logo3.svg",
    alt: "Auraui Logo 3",
    hidden: true,
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/logo13.png",
    alt: "Auraui Logo 13",
    hidden: true,
    height: "h-8",
  },
  {
    src: "https://www.auraui.com/logos/logo12.png",
    alt: "Auraui Logo 12",
    hidden: true,
    height: "h-7",
  },
  {
    src: "https://www.auraui.com/logos/logo14.png",
    alt: "Auraui Logo 14",
    hidden: true,
    height: "h-8",
  },
]

function BrandLogo() {
  return (
    <section className="relative overflow-hidden bg-linear-to-t from-white to-red-200 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">
            Top Companies Hiring
            <ArrowDownRight className="ml-2 h-4 w-4" />
          </div>

          <div>
            <h1 className="mb-6 font-unbounded text-4xl font-bold sm:text-5xl lg:text-7xl">
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                Hire Smarter.
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
                Grow Faster with JobZy
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-7xl font-mont text-base text-gray-600 sm:text-lg lg:text-xl">
              JobZy connects top companies with skilled professionals and helps
              job seekers discover the right opportunities for long-term career
              growth and success.
            </p>
          </div>

          <div className="mt-16 flex flex-col items-center gap-8">
            {/* Existing logos */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                alt="Microsoft"
                className="h-7 object-contain"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon"
                className="h-8 object-contain"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                className="h-7 object-contain"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                alt="IBM"
                className="h-7 object-contain"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
                alt="Infosys"
                className="h-7 object-contain"
              />
            </div>

            {/* AuraUI existing logo images integrated */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className={`${logo.hidden ? "hidden lg:block" : ""}`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`mx-auto w-full object-contain opacity-80 ${
                      logo.height || "h-8"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandLogo
