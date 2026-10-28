"use client"
import Link from "next/link";
import { User } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,

} from "@/components/ui/popover"

import { Button } from "@/components/ui/button";


const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Destinations", href: "/destinations", active: false },
  { label: "Add Destination", href: "/add-destination", active: false },
  { label: "My Bookings", href: "/mybookings", active: false },
];

export function Navbar() {
      const { data: session} = authClient.useSession()
      
      const user = session?.user
      // console.log(user)

      const handleSignOut = () => {
        authClient.signOut()
      }
  return (
    <header className="relative z-10 flex h-12 items-center justify-between border-b border-border bg-white px-6">
      {/* Left nav links */}
      <nav className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`text-sm ${
              link.active
                ? "font-medium text-foreground underline decoration-2 underline-offset-[6px]"
                : "text-foreground/80 hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Center logo */}
      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2 font-serif text-xl font-semibold tracking-wide text-cyan-600"
      >
        Wanderlast
      </Link>

      {/* Right auth links */}
      <div className="flex items-center gap-4 text-sm text-foreground/80">
        <Link href="/profile" className="flex items-center gap-1.5 hover:text-foreground">
          <User className="size-4" />
          Profile
        </Link>
        <span className="text-border">|</span>
   


{
  user ? <Popover>
  <PopoverTrigger render={ <Avatar>
  <AvatarImage referrerPolicy="no-referrer" src={user?.image as string} />
  <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
</Avatar>}>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>{user?.name}</PopoverTitle>
      <PopoverDescription>
       <p>{user?.email}</p>

      <Button onClick={handleSignOut} variant={'destructive'}>Sign Out</Button>

      </PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover> : <>




        <Link href="/login" className="hover:text-foreground">
          Login
        </Link>
        <Link href="/signup" className="hover:text-foreground">
          Sign Up
        </Link>







</>

}









      </div>
    </header>
  );
}
