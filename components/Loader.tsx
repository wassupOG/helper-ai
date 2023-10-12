import Image from "next/image"

export function Loader() {
  return (
    <div className="m-10 flex h-full flex-col items-center justify-center">
      <div className="relative h-12 w-12 animate-spin">
        <Image alt="logo" fill src="/logo.png" />
      </div>
      <p className="text-sm text-muted-foreground">Helper-AI is processing your request</p>
    </div>
  )
}
