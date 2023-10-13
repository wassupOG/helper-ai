"use client"

import { useAuth } from "@clerk/nextjs"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

export function LandingNavbar() {
  const { isSignedIn } = useAuth()

  return (
    <nav className="flex items-center justify-between bg-transparent p-4 md:px-7 md:py-6">
      <Link className="logo flex items-center gap-2" href="/">
        <Image alt="logo" src="/logo.png" height={40} width={40} />
        <h1 className=" text-2xl font-bold">Helper-AI</h1>
      </Link>
      <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
        <Button className="rounded-lg text-slate-900 hover:bg-gray-300" variant="outline">
          Get Started
        </Button>
      </Link>
    </nav>
  )
}
