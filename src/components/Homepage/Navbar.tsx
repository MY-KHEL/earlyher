

"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#Home" },
  { name: "Resources", href: "#Resources" },
  { name: "About", href: "#about" },
  { name: "Contact Us", href: "#Contact Us" },
]

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white/90 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        
        <Link href="/">
            <Image src="/nutriteclogo_green.png" alt="logo" width={120} height={120}/>
        </Link>

        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-green-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-green-700 hover:text-green-800 hover:bg-green-50"
          >
            Login
          </Button>

          <Button className="bg-green-600 hover:bg-green-700 rounded-full px-6">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px]">
              <SheetTitle className="sr-only">
                Navigation Menu
              </SheetTitle>
              <div className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-gray-700 hover:text-green-600"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="flex flex-col gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="rounded-full"
                  >
                    Login
                  </Button>

                  <Button className="bg-green-600 hover:bg-green-700 rounded-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}