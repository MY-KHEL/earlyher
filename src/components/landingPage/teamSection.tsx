import Image from "next/image"

export function TeamSection(){
    const teams =[
        {
            fullName:'Adeyinka Elizabeth',
            role:'Chief Excecutive Officer',
            imageUrl:'/elizabeth.png'
        },
        {
            fullName:'Michael Ojo',
            role:'Tech Lead',
            imageUrl:'/mykhel.png'
        },
        {
            fullName:'Abigail Moejoh',
            role:'Chief Technology Officer & Chief Operations Officer',
            imageUrl:'/abigail.png'
        },
        {
            fullName:'Adenuga Elijah',
            role:'Research Lead',
            imageUrl:'/elijah.png'
        },
    ]
    return(
        <section className="px-[48px] flex flex-col gap-[64px] justify-between">
            <h1 className="text-[56px] leading-[48px] w-full text-center text-project-black font-semibold ">The Founding Team</h1>
            <div className="flex  gap-[36px]">
                {teams.map((team,index)=>(
                    <div className={`${index % 2==0 ? 'bg-project-pink text-black ':'bg-project-green text-white '} rounded-[32px] flex flex-col gap-[25px] text-center py-[36px] px-[16px] w-full` } key={index}>
                            <Image src={team.imageUrl} alt={team.fullName} width={199} height={199} className=" mx-auto aspect-square rounded-full" />
                            <div className="">
                            <p className="text-[20px] leading-[30px] font-semibold">{team.fullName}</p>
                            <p className="text-[16px] leading-[22px] ">{team.role}</p>
                            </div>


                    </div>
                ))}
                </div>
        </section>
    )
}