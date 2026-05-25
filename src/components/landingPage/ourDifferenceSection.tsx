import Image from "next/image";

export function OurDifferenceSection(){
    return(
        <section className="px-[48px]">
            <div className="w-full text-project-black flex justify-between relative py-[81px] pl-[64px] rounded-[32px] bg-project-pink">
                <div className="flex flex-col gap-[32px] max-w-[572px] "> 
                    <h1 className="max-w-[412px] text-[56px] leading-[79px] font-bold">
                        What makes us different?
                    </h1>
                    <p className="text-[32px]">Nutritec AI focuses on prevention by combining breast cancer risk awareness with personalized nutrition guidance, delivering practical, accessible, and empowering recommendations tailored to each user.</p>
                </div>
                <div className="absolute top-0 right-0 h-full ">
                <Image src={'/difference.png'} alt="phone mockup" width={678} height={628} className=" h-full object-cover"/>
                </div>
            </div>



        </section>
    )
}