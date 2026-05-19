"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "About", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Contact us", href: "#" },
];

export default function Navbar() {
  return (
    <header className="w-full px-4 py-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-xl bg-[#2C8C55] px-5 py-3 text-white shadow-sm">
        
        
        <Link href="/">
            <Image src="/nutriteclogo.png" alt="logo" width={150} height={150}/>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm transition hover:opacity-80"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <Menu size={24} />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-white">
            <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="mt-10 pl-4 pr-4 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}