import {
  Activity,
  ArrowRight,
  Clock,
  MapPin,
  Microscope,
  Play,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const details = [
    {
      icon: <Activity color="white" />,
      iconBackground: "[#d81b60]",
      heading: "1 in 27",
      content: "African women face breast cancer risk",
    },
    {
      icon: <Clock />,
      iconBackground: "white",
      heading: "70%",
      content: "Survival rate were caught early",
    },
    {
      icon: <MapPin />,
      iconBackground: "white",
      heading: "500+",
      content: "Linked screening centres across Africa",
    },
  ];
  return (
    <section className="bg-[#1a7a4a] gap-6 w-full px-4 py-4 md:py-15 md:px-20 max-md:flex-col flex items-end  ">
      <div className="flex flex-col gap-8 w-full ">
        <div className="flex flex-col ">
          <div className="flex gap-2 items-center bg-[#3c8e65] w-fit rounded-full px-3 py-2">
            <div className="bg-[#d81b60] p-2 rounded-full">
              <Microscope color="white" size={16} />
            </div>
            <p className="text-white">Backed by Research</p>
          </div>
          <h4 className="text-[#f9a8c9]">CREATED FOR AN AFRICAN WOMAN</h4>
        </div>
        <h1 className="text-white text-[80px] leading-[110%] font-semibold max-w-[600px]">
          Know Your <span className="text-[#f9a8c9]">Breast Cancer </span> Risk.
        </h1>
        <p className="max-w-[400px] text-white/70">
          Early detection saves lives. Learn self-examination, understand your
          risk, and get connected to care - in your language, near you.
        </p>

        <div className="flex max-md:flex-col items-center gap-10 ">
          <Link
            href={"/demo"}
            className="bg-[#d81b60] flex items-center gap-2 px-5 rounded-full text-white py-3"
          >
            Check my Risk
            <ArrowRight color="white" />
          </Link>
          <Link href={"/"} className="flex items-center text-white/70 gap-4">
            {" "}
            <PlayCircle size={30} /> Watch How it Works{" "}
          </Link>
        </div>
      </div>
      <div className=" flex flex-col gap-4  w-full items-end">
        {details.map((detail, index) => (
          <StatsCard
            icon={detail.icon}
            key={index}
            iconBackground={detail.iconBackground}
            heading={detail.heading}
            content={detail.content}
          />
        ))}
      </div>
    </section>
  );
}
interface IStatsCard {
  icon: React.ReactNode;
  iconBackground: string;
  heading: string;
  content: string;
}
const StatsCard = ({ icon, iconBackground, heading, content }: IStatsCard) => (
  <div className="bg-[#3c8e65] rounded-2xl w-full md:max-w-[400px] p-4 flex gap-4 items-center">
    <div className={`p-3 rounded-2xl  bg-${iconBackground}`}>{icon}</div>
    <div className="flex flex-col">
      <h1 className="text-white text-[32px] font-semibold">{heading}</h1>
      <p className="max-md:text-[12px] text-white/70">{content}</p>
    </div>
  </div>
);
