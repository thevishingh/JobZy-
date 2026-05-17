import { ArrowDownRight } from "lucide-react"

const companies = [
  {
    name: "Google",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/google-logo.png",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "HubSpot",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/hubspot-logo.png",
  },
  {
    name: "Walmart",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/walmart-logo.png",
  },
  {
    name: "Microsoft",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/microsoft-logo.png",
  },
  {
    name: "FedEx",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/fedex-logo.png",
  },
  {
    name: "Airbnb",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/airbnb-logo.png",
  },
  {
    name: "Adobe",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/adobe-logo.png",
  },
  {
    name: "Shopify",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/shopify-logo.png",
  },
  {
    name: "PayPal",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/paypal-logo.png",
  },
  {
    name: "Huawei",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/huawei-logo.png",
  },
  {
    name: "OLA",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/ola-logo.png",
  },
  {
    name: "Deloitte",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/deloitte-logo.png",
  },
  {
    name: "BookMyShow",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/bookmyshow-logo.png",
  },
  {
    name: "Gatsby",
    logo: "https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/gatsby-logo.png",
  },
]

function BrandLogo() {
  return (
    <section className="relative overflow-hidden py-10 dark:bg-[#050509]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center rounded-full border border-indigo-400 px-3 py-1 text-xs font-base font-mont text-white-700">
            Top Companies Hiring
            <ArrowDownRight className="ml-2 h-4 w-4" />
          </div>

          <div className="mx-auto max-w-7xl">

            <h1 className="mt-6 font-unbounded text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-5xl">
              <span className="text-[#393629] dark:text-white">
                Smarter Hiring for
              </span> &nbsp;

              <span className="bg-linear-to-r from-orange-500 via-rose-500 to-yellow-400 bg-clip-text text-transparent">
                Modern Teams
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-7xl font-inter capitalize text-base leading-8 text-[#6b6658] sm:text-lg dark:text-slate-400 lg:text-base">
              Jobzy helps recruiters hire faster and enables candidates to discover
              meaningful career opportunities through a modern hiring experience.
            </p>
          </div>

          <section className="bg-background px-4 dark:bg-[#050509]  text-foreground sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">

              <div className="grid grid-cols-2 overflow-hidden  border border-border sm:grid-cols-3 lg:grid-cols-5">
                {companies.map((company, index) => (
                  <div
                    key={company.name}
                    className={`flex h-28 items-center justify-center border-border bg-card/50 p-6 transition hover:bg-muted/40 ${index % 2 !== 0 ? "border-l" : ""} ${index >= 2 ? "border-t" : ""} sm:${index % 3 !== 0 ? "border-l" : ""} sm:${index >= 3 ? "border-t" : ""} lg:${index % 5 !== 0 ? "border-l" : ""} lg:${index >= 5 ? "border-t" : ""} `}
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-10 w-auto object-contain opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default BrandLogo
