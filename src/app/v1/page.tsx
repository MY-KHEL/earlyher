import { AboutSection } from "@/components/landingPage/aboutSection";
import { AwardSection } from "@/components/landingPage/awardSection";
import { OurDifferenceSection } from "@/components/landingPage/ourDifferenceSection";
import { ScalabilitySection } from "@/components/landingPage/scalabilitySection";
import { ServiceSection } from "@/components/landingPage/serviceSection";
import { TeamSection } from "@/components/landingPage/teamSection";

export default function NewHomePage(){
    return(
        <main className="flex flex-col gap-[128px]">
            <AboutSection/>
            <ServiceSection/>
            <OurDifferenceSection/>
            <AwardSection/>
            <ScalabilitySection/>
            <TeamSection/>
        </main>
    )
}