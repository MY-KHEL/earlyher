import About from "@/components/Homepage/About";
import Features from "@/components/Homepage/Features";
import  HeroSection from "@/components/Homepage/HeroSection";
import Navbar from "@/components/Homepage/Navbar";
import Difference from "@/components/Homepage/Difference";
import Awards from "@/components/Homepage/Awards";
import CurrentStatus from "@/components/Homepage/CurrentStatus";
import Team from "@/components/Homepage/Team";
import CTA from "@/components/Homepage/CTA";



export default function Home() {
  return (
   <>
   <div className=" relative">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Features/>
      <Difference/>
      <Awards/>
      <CurrentStatus/>
      <Team/>
      <CTA/>
   </div>
   </>
  );
}
