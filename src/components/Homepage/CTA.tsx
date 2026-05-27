

import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-project-green py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        
        <h2 className="text-3xl font-bold sm:text-5xl">
          Get early access to Nutritec Ai
        </h2>

        <p className="mt-6 text-lg text-green-100">
          Join the waitlist for updates or try the demo to experience personalized breast cancer prevention through nutrition.
        </p>

        <Button className="mt-8 h-12 rounded-full bg-white px-8 text-base text-green-700 hover:bg-green-100">
          Join waitlist
        </Button>
      </div>
    </section>
  )
}