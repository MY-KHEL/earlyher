
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#042412] py-14 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-3 md:px-6">
        
        <div>
          <h3 className="text-2xl font-bold text-project-pink">
            NutritecAI
          </h3>

          <p className="mt-4 text-gray-400">
            Delivering personalized nutrition guidance to support breast cancer prevention.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-project-pink">
           Quick Links
          </h4>

          <div className="space-y-3 text-gray-400">
            <Link href="#">X(Twitter)</Link>
            <br />
            <Link href="#">Facebook</Link>
            <br />
            <Link href="#">Instagram</Link>
          </div>
        </div>

        

        <div>
          <h4 className="mb-4 font-semibold text-project-pink">
            Contact Us
          </h4>

          <div className="space-y-3 text-gray-400">
            <p>Email: nutritecai@gmail.com</p>
            <p>Phone: 01234567890</p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © 2026 NutritecAI. All rights reserved.
      </div>
    </footer>
  )
}