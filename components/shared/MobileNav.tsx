"use client"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { AlignRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
  
const MobileNav = () => {
    const pathname = usePathname();

  return (
   <header className="header">
     <Link href="/" className="flex items-center gap-2 md:py2">
       <Image src="/logo.png" alt="log" width={50} height={50}  />
     </Link>
     <nav className="flex items-center justify-between">
        <SignedIn>
         <UserButton afterSignOutUrl="/"  />
         <Sheet>
  <SheetTrigger>
    <AlignRight
    width={32} height={32} className="cursor-pointer" />
  </SheetTrigger>
  <SheetContent className="sheet-content sm:w-64">
    <>
    <Image src="/logo.png" alt="lg" width={52} height={52}/>

    <ul className="header-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`flex-center p-6-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-purple-100 hover:shadow-inner ${
                    isActive ? 'bg-blue-400 text-white' : 'text-gray-700'
                  }`}>
                    <Link className="p-6-semibold flex size-full gap-4 p-2" href={link.route}>
                      <link.icon
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>
    </>
    </SheetContent>
   </Sheet>
 </SignedIn>

 <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
 </SignedOut>
     </nav>
   </header>
  )
}

export default MobileNav