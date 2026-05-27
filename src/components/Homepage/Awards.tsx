

import Image from "next/image"

const awards = [
  {
    logo: "/afreteclogo.png",
    title: "    Afretec innovation",
    year: " June 2025",
    position: "1st Place",

    badgeText: "text-blue-700",
    cardBorder: "border-blue-200",
    badgeBg: "bg-blue-100",

  },
  {
    logo: "/wemabank.png",
    title: "WEMA Bank Hackaholics",
    year: "December 2025",
    position: "Finalists",

    badgeText: "text-blue-700",
    cardBorder: "border-blue-200",
  },
  {
    logo: "/evonlabs.png",
    title: "Evon Health Incubator Program",
    year: "April 2025",
    position: "Cohort Member",

    badgeText: "text-blue-700",
    cardBorder: "border-blue-200",
  },
  
]

export default function Awards() {
  return (
    <section
      id="awards"
      className="bg-[#F7FAF8] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">

       
        <div className="mb-14 text-center">
         

          <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Awards and Acheivements
          </h2>

          
        </div>

        {/* AWARD CARDS */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {awards.map((award, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              
              {/* LOGO */}
              <div className="mb-6 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F7FAF8]">
                  <Image
                    src={award.logo}
                    alt={award.title}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-center text-lg font-semibold text-gray-900">
                {award.title}
              </h3>

              {/* YEAR */}
              <p className="mt-3 text-center text-sm font-medium text-green-700">
                {award.year}
              </p>

              {/* POSITION */}
              <div className={`mt-5 rounded-2xl ${award.cardBorder} px-4 py-3 text-center`}>
                <p className={`text-sm font-medium ${award.badgeText}`}>
                  {award.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}