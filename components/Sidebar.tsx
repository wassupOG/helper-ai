"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Sidebar() {
  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "#ff6f43",
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
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
      color: "#E6ECE9",
    },
  ]

  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col bg-zinc-950 px-7 pt-6 text-white">
      <Link
        href="/dashboard"
        className="logo flex w-fit items-center gap-1 opacity-90 transition-all ease-in-out hover:opacity-100"
      >
        <Image alt="logo" src="/logo.png" height={40} width={40} />
        <h1 className=" text-2xl font-bold">Helper-AI</h1>
      </Link>

      <div className="mt-12 flex flex-col gap-4 ">
        {routes.map((route) => (
          <Link
            className={cn(
              "flex w-full gap-2 rounded-md p-2 transition-all ease-in-out  hover:bg-slate-800",
              pathname === route.href ? "bg-slate-700" : "",
            )}
            key={route.href}
            href={route.href}
          >
            <route.icon style={{ color: route.color }} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
