"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()
  const tools = [
    {
      label: "Music Generation",
      icon: Music,
      href: "/music",
      color: "#d11e18",
    },
    {
      label: "Video Generation",
      icon: VideoIcon,
      href: "/video",
      color: "#6446c0",
    },
    {
      label: "Conversation",
      icon: MessageSquare,
      href: "/conversation",
      color: "#3a90bb",
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      href: "/image",
      color: "#d14a69",
    },
  ]

  return (
    <>
      <div className="flex flex-col items-center px-4 py-4">
        <h1 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
          Explore the power of AI
        </h1>
        <p className="mt-5 text-center text-xl md:text-2xl">
          Take a look at how you can supercharge your productivity with{" "}
          <span className="font-bold">Helper-AI</span>
        </p>
        <div className="mt-12 flex w-full flex-col items-center gap-7">
          {tools.map((tool) => (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className={cn(
                "flex  w-[80%] cursor-pointer gap-2 bg-slate-100 p-4 shadow-md transition-all hover:bg-slate-200 md:w-[70%]",
              )}
            >
              <tool.icon style={{ color: tool.color }} /> {tool.label}
              <ArrowRight className=" ml-auto" />
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
