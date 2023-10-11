import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react"

export default function DashboardPage() {
  const options = [
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
    {
      label: "Video Generation",
      icon: VideoIcon,
      href: "/video",
      color: "#6446c0",
    },
    {
      label: "Music Generation",
      icon: Music,
      href: "/music",
      color: "#d11e18",
    },
    {
      label: "Code",
      icon: Code,
      href: "/code",
      color: "#64c046",
    },
  ]

  return (
    <>
      <div className="flex flex-col items-center px-4 py-4">
        <h1 className="text-3xl font-bold md:text-4xl">Explore the power of AI</h1>
        <p className="mt-5 text-center text-2xl">
          Take a look at how you can supercharge your productivity with Helper-AI
        </p>
        <div className="mt-8 flex flex-col gap-7">
          {options.map((option) => (
            <Card className={cn("flex w-[350px] gap-2 bg-slate-100 p-4 shadow-md")}>
              <option.icon style={{ color: option.color }} /> {option.label}
              <ArrowRight className=" ml-auto" />
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
