import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function BotAvatar() {
  return (
    <Avatar className="m-1 h-10 w-10">
      <AvatarImage src="/logo.png" />
    </Avatar>
  )
}
