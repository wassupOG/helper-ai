import { useUser } from "@clerk/nextjs"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function UserAvatar() {
  const { user } = useUser()
  return (
    <h1>
      <Avatar className="m-1 h-10 w-10">
        <AvatarImage src={user?.imageUrl} />
        <AvatarFallback>
          {user?.firstName?.charAt(0)}
          {user?.lastName?.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </h1>
  )
}
