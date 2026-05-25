

import Image from "next/image"

const team = [
  {
    name: "Abigail Moejoh",
    role: "Chief Executive Officer & Chief Technology Officer",
    image: "/TeamAvatar1.png",
  },
  {
    name: "Adeyinka Elizabeth",
    role: "Product & Project Management Lead",
    image: "/TeamAvatar2.png",
  },
  {
    name: "Ojo Micheal",
    role: "Tech Lead",
    image: "/TeamAvatar3.png",
  },
  {
    name: "Adenuja Elijah",
    role: "Research Lead",
    image: "/TeamAvatar4.png",
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-[#F7FAF8] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        
        <div className="text-center">

          <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet the people behind NutritecAI
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-sm flex items-center flex-col"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className=" flex self-center"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-green-700">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}