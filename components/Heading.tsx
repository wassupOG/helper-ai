import { cn } from "@/lib/utils"

interface HeadingProps {
  title: string
  description: string
  Icon: any
  iconColor: string
}

export function Heading({ description, Icon, iconColor, title }: HeadingProps) {
  return (
    <div className="flex w-fit items-center gap-3 rounded-md px-4 py-2 md:ml-5">
      <Icon className={cn("h-10 w-10", iconColor)} />
      <div>
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  )
}
