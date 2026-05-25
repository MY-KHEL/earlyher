export function ServiceSection(){
const services = [
    {
        title:'Personalized Risk Assessment',
        content:'Assess breast cancer risk through a quick, easy questionnaire completed in under 10 minutes.'
    },
    {
        title:'Tailored Nutrition Recommendations',
        content:' Get personalized, science-backed nutrition guidance designed to support breast cancer prevention.'
    },
    {
        title:'Actionable Insights & Next Steps',
        content:'Assess breast cancer risk through a quick, easy questionnaire completed in under 10 minutes.'
    },
]

    return(
        <section className="px-[76.5px]  flex flex-col items-center  gap-[64px] ">
            <h1 className="text-[64px] font-semibold leading-[48px]">Key features and benefits</h1>
            <div className="flex w-full justify-between gap-[36px]">
            {services.map((service,index )=>(
                <div key={index} className=" w-full text-white text-center bg-project-green flex flex-col gap-[32px] rounded-[32px] py-[56.5px] px-[31.24px]">
                    <h1 className="font-bold text-[24px] leading-[34px] tracking-[-0.5px]">{service.title}</h1>
                    <p className="font-medium text-[20px] leading-[29px]" >{service.content}</p>

                </div>
            ))}
            </div>
            
        </section>
    )
}