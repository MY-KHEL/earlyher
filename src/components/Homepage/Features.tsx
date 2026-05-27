


const features = [
  {
    
    title: "Personalized Risk Assessment",
    description:
      "Assess breast cancer risk through a quick, easy questionnaire completed in under 10 minutes..",
  },
  {
    
    title: "Tailored Nutrition Recommendations",
    description:
      "Get personalized, science-backed nutrition guidance designed to support breast cancer prevention.",
  },
  {
    
    title: "Actionable Insights & Next Steps",
    description:
      "Receive simple, easy-to-understand results with practical food and lifestyle actions you can apply immediately",
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[#F7FAF8] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-900 sm:text-4xl">Key Features and Benefits</h1>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {features.map((feature, index) => {
           

            return (
              <div
                key={index}
                className="rounded-3xl bg-project-green p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                

                {/* TITLE */}
                <h3 className="mb-5 text-xl font-semibold text-white text-center">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="leading-relaxed text-white text-center">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}