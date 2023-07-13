"use client";

import CalloutCard from "@/components/CalloutCard";
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#49e69d] to-[#18387E] p-10 flex flex-col justify-center items-center">
      <Card className="bg-black max-w-4xl mx-auto rounded-lg">
        <Text className="text-5xl font-bold text-center mb-10 text-gray-400">
          Weather AI
        </Text>
        <Subtitle className="text-xl text-center text-white">
          Powered by OpenAI, Next.js 13.3, Tailwind CSS, Tremor 2.0+ & More!
        </Subtitle>
        <Divider className="my-10"></Divider>
        <Card className="bg-gradient-to-br from-[#49e69d] to-[#18387E] rounded-lg">
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
