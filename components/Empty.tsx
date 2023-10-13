import Image from "next/image"

interface EmptyProps {
  label: string
}

export function Empty({ label }: EmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image priority fill alt="Empty" src="/empty.png" />
      </div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}
