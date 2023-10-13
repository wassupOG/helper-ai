"use client"
import { useAuth } from "@clerk/nextjs"
import TypewriterComponent from "typewriter-effect"
import { Button } from "./ui/button"
import Link from "next/link"

export function LandingHero() {
  const { isSignedIn } = useAuth()

  return (
    <div className="mt-16 flex flex-col items-center gap-8 px-4 md:mt-20">
      <h1 className="text-center text-2xl font-extrabold sm:text-4xl">Explore the power of AI</h1>
      <div className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-3xl font-extrabold text-transparent sm:text-4xl">
        <TypewriterComponent
          options={{
            strings: ["Chatbot", "Image Generation", "Music Generation", "Video Generation"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="text-center text-gray-400 md:text-xl">
        Supercharge your productivity with <span className="font-extrabold">Helper-AI</span>
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "sign-up"}>
          <Button className=" rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-lg hover:from-purple-700 hover:to-pink-700">
            Start for free
          </Button>
        </Link>
      </div>
    </div>
  )
}
