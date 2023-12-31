import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
  const { weatherData } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `Pretend you're a weather news presenter presenting LIVE on television. 
        Present the weather data in an enthusaistic manner from Nishanth Studios. 
        Present a summary of today's weather only`,
      },
      {
        role: "user",
        content: `Hi there, can I get a summary of today's weather, use the following information to get weather data:
            ${JSON.stringify(weatherData)}`,
      },
    ],
  });

  const { data } = response;

  console.log("Data: ", data);

  return NextResponse.json(data.choices[0].message);
}

// `Pretend you're a weather news presenter presenting LIVE on television. Be energetuc and full of charisma.
//             Introduce yourself as Thiagones and say you are LIVE from Brazil.
//             tate the city you are providing a summary for. Then give a summary of today's weather only.
//             Make it easy for the viewers to understand know what to do to prepare for those weather conditions such as wear SPF if the UV is high, etc.
//             Us the uv_index data provided to provide UV advice. Provide a joke regarding the weather.
//             Assume the data came from your team at the news office and not the user.`,
