"use client";

import CalloutCard from "@/components/CalloutCard";
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#18387E] p-10 flex flex-col justify-center items-center">
      <Card className="bg-white max-w-4xl mx-auto rounded-lg">
        <Text className="text-6xl font-bold text-center mb-10 text-gray-500">
          Weather AI
        </Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13.3, Tailwind CSS, Tremor 2.0+ & More!
        </Subtitle>
        <Divider className="my-10"></Divider>
        <Card className="bg-gradient-to-br from-[#394F68] to-[#18387E] rounded-lg">
          <CityPicker />
        </Card>
      </Card>
      <div className="overflow-hidden text-6xl tremor-metric">
        {/* <CalloutCard message={content} /> */}
        <CalloutCard
          message={`Good evening everyone and welcome to Nishanth Studios! 
            I'm your weather news presenter and I have some exciting weather data to share with you today. 
            Let's dive right in! Today, in the beautiful city of Banaj, we are experiencing a delightful 
            temperature of 21.9 degrees Celsius. The winds are blowing gently at a speed of 3 kilometers per hour, 
            coming from the direction of 108 degrees. It's a perfect day to step outside and enjoy the pleasant breeze. 
            Now, let's take a look at the hourly forecast for today. The temperatures will range from 22.7 degrees Celsius 
            in the morning and gradually rise to a maximum of 32.8 degrees Celsius in the afternoon. So, make sure to dress 
            accordingly as it's going to be a warm day. I have some good news for all the snow lovers out there. 
            There is no snowfall expected throughout the day, so no need to worry about shoveling or slipping on icy roads. 
            Rainfall is also taking a break today, with no precipitation expected. It's a great opportunity to plan outdoor activities 
            without any worries of getting wet. Humidity levels will vary throughout the day, starting at a high of 93% in the morning and 
            gradually decreasing to around 87% in the evening. So, it might feel a bit muggy in the morning, but things will get more comfortable 
            as the day progresses. For all you sun worshippers, we have an update on the UV index. Currently, we have a UV index of 0, but as the day 
            progresses, it will rise to a moderate level of 8.1. So, don't forget to wear your sunscreen and protect your skin from those harmful rays. That's all for today's weather summary from Nishanth Studios! Remember to stay hydrated, wear appropriate clothing, and enjoy the day. Stay tuned for more exciting weather updates right here. Have a fantastic day ahead!`}
        />
        {
          // <CalloutCard message="This is where the GPT summary usually goes....." />
        }
      </div>
    </div>
  );
}
