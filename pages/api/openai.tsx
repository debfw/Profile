// pages/api/conversation.ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const reqBody = JSON.parse(req.body);
  // Extract the conversation history and the user's latest message from the request body

  // Construct the body for the OpenAI API request
  const body = {
    model: "gpt-3.5-turbo",
    messages: reqBody.messages, // Include the entire conversation history
  };
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    // Parse the JSON response from the OpenAI API
    const data = await response.json();
    console.log({ respData: data });
    const newMessage = data.choices[0]?.message;
    const allMessages = reqBody.messages;
    if (newMessage) {
      allMessages.push(newMessage);
    }

    console.log({ allMessages });

    // if (!response.ok) {
    //   // Handle the case where OpenAI API returned an error
    //   console.error('OpenAI API Error:', data);
    //   return res.status(500).json({ message: "Error from OpenAI API", error: data });
    // }

    // // Assuming success, append the new AI response to the conversation history
    // const newMessages = [...messages, ...data.choices[0].message];

    // Return the updated conversation history
    return res.status(200).json(allMessages);
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
