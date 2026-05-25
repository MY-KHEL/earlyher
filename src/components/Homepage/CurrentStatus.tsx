"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Flag, MapPin } from "lucide-react"
import { useRef } from "react"

export default function CurrentStatus() {
  const sectionRef = useRef(null)

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-15%",
  })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 45%"],
  })

  // Animated dotted line growth
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Fade in for bottom text
  const bottomOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.75],
    [0, 1]
  )

  const bottomY = useTransform(scrollYProgress, [0.45, 0.75], [40, 0])

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="mx-auto  px-6">
        
        <div className="relative grid grid-cols-[1fr_50px_1fr] items-start">
          {/* LEFT TOP CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="pr-4 pt-4 text-right"
          >
            <h2 className="text-2xl font-bold tracking-tight text-black md:text-4xl">
              Where we are currently
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base md:leading-8">
              Nutritec AI is a functional web-based solution offering breast cancer risk assessment and personalized nutrition guidance, focused on prevention and early awareness.
            </p>
          </motion.div>

          {/* CENTER TIMELINE */}
          <div className="relative flex h-[520px] justify-center">
            {/* BACKGROUND DOTTED LINE */}
            <div className="absolute top-14 h-[380px] border-l-2 border-dashed border-neutral-300" />

            {/* ANIMATED DOTTED LINE */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-14 border-l-2 border-dashed border-emerald-500"
            />

            {/* TOP ICON */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={
                isInView
                  ? {
                      scale: 1,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="absolute top-0 z-10 flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-emerald-500 bg-white"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500">
                <Flag className="h-5 w-5 text-white" />
              </div>
            </motion.div>

            {/* MAP ICON */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={
                isInView
                  ? {
                      scale: 1,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="absolute bottom-0 z-10 flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-emerald-500 bg-white"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500">
                <MapPin className="h-5 w-5 text-white" />
              </div>
            </motion.div>
          </div>

          {/* RIGHT BOTTOM CONTENT */}
          <motion.div
            style={{
              opacity: bottomOpacity,
              y: bottomY,
            }}
            className="self-end pl-4 pb-2 mt-100"
          >
            <h2 className="text-base font-bold tracking-tight text-black md:text-4xl">
              Where we are heading
            </h2>

            <div className="mt-2 space-y-4 text-sm leading-7 text-neutral-600 md:text-sm md:leading-8">
              

              <p>
                Diagnostic Integration: Optional integration with clinical
                screening data for deeper insights
              </p>

              <p>
                Full AI Model: Advanced AI-driven predictions, continuous
                learning, and highly tailored prevention plans
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}