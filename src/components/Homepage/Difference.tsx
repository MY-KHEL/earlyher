

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative  rounded-lg bg-project-pink">
      
      <div className="relative mx-auto flex flex-col items-center gap-12 px-4 py-1 md:px-6 lg:flex-row lg:py-1">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-8 text-center lg:text-left">

          {/* Main Heading */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
             What makes us <span className="text-project-green">different?</span> 
            </h2>

            <p className="mx-auto max-w-xl text-xl leading-relaxed text-gray-600 lg:mx-0">
              Nutritec AI focuses on prevention by combining breast cancer risk awareness with personalized nutrition guidance, delivering practical, accessible, and empowering recommendations tailored to each user.
            </p>
          </div>

         
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex flex-1 items-center justify-end">

          
          {/* DESKTOP IMAGE */}
          <div className="relative hidden overflow-hidden p-3  lg:block">
            <Image
              src="/DifferenceImgDesktop.png"
              alt="NutritecAI Desktop"
              width={500}
              height={700}
              priority
              className="h-auto w-full  object-cover"
            />
          </div>

          {/* MOBILE IMAGE */}
          <div className="relative overflow-hidden  lg:hidden">
            <Image
              src="/DifferenceImgMobile.png"
              alt="NutritecAI Mobile"
              width={350}
              height={500}
              priority
              className="h-auto w-full  object-cover"
            />
          </div>

         
        </div>
      </div>
    </section>
  )
}