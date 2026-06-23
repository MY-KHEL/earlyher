"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

export function NavBar(){

    const navLinks = [
        {
            linkTitle:'How It Works',
            linkHref:'/'
        },
        {
            linkTitle:'Risk Assessment',
            linkHref:'/'
        },
        {
            linkTitle:'Find a Clinic',
            linkHref:'/'
        },
        {
            linkTitle:'Resources',
            linkHref:'/'
        },
        
    ]
const pathname = usePathname()
 
 const demoRoute = pathname.startsWith('/demo')
console.log(demoRoute);

    return(
        <div className= {`${demoRoute ? 'hidden':'flex'} justify-between py-4 px-8`}>
            <div className=" flex items-center gap-3">
                <h4 className="text-md flex justify-center items-center font-semibold text-white bg-[#d81b60] w-8 rounded-full aspect-square ">E</h4>
                <h3 className="font-bold  text-xl ">EarlyHer</h3>


            </div>
            <div className="flex items-center gap-8 max-md:hidden">
            {navLinks.map((link,index)=>(
                <Link href={link.linkHref} key={index} className="text-[14px] text-[#888888]">{link.linkTitle}</Link>
            ))}

            </div>
            <Link href={'/'} className="bg-[#d81b60] px-3 rounded-full text-white py-2">
               Check my Risk 
            </Link>
        </div>
    )
}