"use client"

import * as z from "zod"
import { Heading } from "@/components/Heading"
import { MessageSquare, SendHorizontal } from "lucide-react"
import { useForm } from "react-hook-form"
import { formSchema } from "./constants"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { CreateChatCompletionRequestMessage } from "openai/resources/chat/index.mjs"
import { Empty } from "@/components/Empty"
import { Loader } from "@/components/Loader"

export default function ConversationPage() {
  const router = useRouter()
  const [messages, setMessages] = useState<CreateChatCompletionRequestMessage[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  })

  const isLoading = form.formState.isSubmitting
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const userMessage: CreateChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      }
      const newMessages = [...messages, userMessage]

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      })
      setMessages((current) => [...current, userMessage, response.data])
      form.reset()
    } catch (error) {
      console.error(error)
    } finally {
      router.refresh()
      form.reset()
    }
  }

  return (
    <>
      <Heading
        title="Conversation"
        description="Consult with Helper-AI to keep your workflow smooth"
        iconColor="text-[#3a90bb]"
        Icon={MessageSquare}
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
                      placeholder="Tell me a fun fact about the Roman Empire..."
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
          <div className="flex items-center justify-center gap-2 bg-red-100 p-2 text-center text-red-500">
            <div>
              Feature <span className="font-bold">is not available </span> because my free ChatGPT
              API quota has exceeded, and they do not accept Russian cards
            </div>
          </div>
          {!messages.length && (
            <div>
              <Empty label="You haven't started a conversation yet" />
            </div>
          )}
          <div>
            {messages.map((message) => (
              <div key={message.content}>{message.content}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
