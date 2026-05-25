import Image from "next/image";

export function AwardSection(){
    return(
       <section className="px-[48px] py-[67.5px] flex gap-[90px] justify-between">

                <div className="max-w-[808px] flex flex-col gap-[32px] ">

                    <h1 className="font-bold text-[56px] leading-[60px]">Awards</h1> 
                    <p className="text-[32px] leading-[180%]">
Nutritec AI is an award winning solution, recognized at the Afretec Awards for its innovative approach to breast cancer prevention through personalized nutrition and technology.
                    </p>
                    <div className="flex flex-col gap-[12.2px] max-w-[213px]">
                        <p className="text-center">Powered By</p>
                        <div className="relative aspect-[213/100]">
                        <Image src={'/afretec.png'} width={213} height={100} alt="logos"/>
                        </div>
                    </div>

                </div>
                <div className="w-fit  mx-auto">
                    <Image src={'/awards.png'} width={476} height={476} alt="awards"/>
                </div>
                
       </section>
    )
}