import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Sidebar from "./Sidebar"

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button asChild size="icon" variant="ghost" className="md:hidden">
          <Menu className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 text-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
