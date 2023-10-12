"use client"

import * as z from "zod"
import { Heading } from "@/components/Heading"
import { Music, SendHorizontal } from "lucide-react"
import { useForm } from "react-hook-form"
import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Empty } from "@/components/Empty"
import { Loader } from "@/components/Loader"

export default function MusicPage() {
  const router = useRouter()
  const [music, setMusic] = useState<string>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setMusic(undefined)

      const response = await axios.post("/api/music", values)
      console.log(response)

      setMusic(response.data.audio)
      form.reset()
    } catch (error: any) {
      console.error(error)
    } finally {
      router.refresh()
    }
  }

  return (
    <>
      <Heading
        title="Music Generation"
        description="Turn your prompt into a music sample with ease"
        iconColor="text-[#d11e18]"
        Icon={Music}
      />

      <div className="px-5  md:px-10">
        <Form {...form}>
          <form
            className="flex items-center justify-center p-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="w-full max-w-4xl">
                  <FormControl>
                    <Input
                      className="outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      placeholder="Guitar solo..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="ml-2" disabled={isLoading}>
              <SendHorizontal />
            </Button>
          </form>
        </Form>
        {isLoading && <Loader />}
        <div className="m-4">
          {!music && (
            <div>
              <Empty label="No music has been generated yet." />
            </div>
          )}
          {music && (
            <audio controls className="m-8 w-full">
              <source src={music} />
            </audio>
          )}
        </div>
      </div>
    </>
  )
}
