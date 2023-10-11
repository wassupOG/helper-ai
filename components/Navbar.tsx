import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "@/components/Mobile-sidebar"

export default function Navbar() {
  return (
    <nav className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  )
}
