import OpenAI from "openai"
import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
})

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { messages } = body

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello!" }],
    })
    console.log(chatCompletion.choices[0].message)

    return NextResponse.json(chatCompletion.choices[0].message)
  } catch (error) {
    console.error("[CONVERSATION_ERROR", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
