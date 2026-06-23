import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

//layyout
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nutritec Ai",
  description: "Spit don show wetin body dey hide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative">
          <div className="flex justify-between p-3">
            <div className=" flex items-center gap-3">
              <h4 className="text-md flex justify-center items-center font-semibold text-white bg-[#d81b60] w-8 rounded-full aspect-square ">
                E
              </h4>
              <h3 className="font-bold  text-xl ">EarlyHer</h3>
            </div>

            <Link href={"/"}>Exit Assessment</Link>
          </div>
          {children}
          {/* <Footer/> */}
        </div>
      </body>
    </html>
  );
}
