"use client"

import * as z from "zod"
import { Heading } from "@/components/Heading"
import { SendHorizontal, VideoIcon } from "lucide-react"
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

export default function VideoPage() {
  const router = useRouter()
  const [video, setVideo] = useState<string>()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined)

      const response = await axios.post("/api/video", values)
      console.log(response)

      setVideo(response.data[0])
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
        title="Video Generation"
        description="Turn your prompt into a video"
        iconColor="text-[#6446c0]"
        Icon={VideoIcon}
      />

      <div className="px-5 md:px-10">
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
                      placeholder="A sleeping cat..."
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
        <div className="mt-4 flex w-full justify-center ">
          {!video && (
            <div>
              <Empty label="No videos have been generated yet." />
            </div>
          )}
          <div className="max-w-[1200px]">
            {video && (
              <video controls className="m-8 aspect-video w-full rounded-xl">
                <source src={video} />
              </video>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
