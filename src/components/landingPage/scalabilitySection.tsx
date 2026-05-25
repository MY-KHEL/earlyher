import Image from "next/image";

export function ScalabilitySection(){
    return(
        <section className="px-[48px]">
            <div className="bg-project-green relative px-[105px] pb-[183px] rounded-[32px]">
                <Image src={'/street.png'} width={1135} height={1419} alt="strret illustation" />

                <div className="absolute flex flex-col z-10 gap-[29px] text-white w-[879px] top-[62px] left-[259px]">
                    <h1 className="text-[56px] leading-[60px] font-bold">Where are we currently</h1>
                    <p className="text-[32px] leading-[180%]">Nutritec AI is a functional web-based solution offering breast cancer risk assessment and personalized nutrition guidance, focused on prevention and early awareness.</p>
                </div>
                <div className="absolute flex flex-col z-10 gap-[29px] text-white w-[879px] bottom-[54px] left-[435px]">
                    <h1 className="text-[56px] leading-[60px] font-bold">Where we are heading</h1>
                    <p className="text-[32px] leading-[180%]">V2: Enhanced personalization, broader nutrition database, and improved risk modeling. <br/> Mobile App: iOS and Android apps for easier access and daily engagement.<br/> Diagnostic Integration: Optional integration with clinical screening data for deeper insights.<br/>Full AI Model: Advanced AI-driven predictions, continuous learning, and highly tailored prevention plans</p>
                </div>
            </div>
        </section>
    )
}