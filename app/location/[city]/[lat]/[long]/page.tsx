import { getClient } from "@/apollo-client";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import CalloutCard from "@/components/CalloutCard";
import StatCard from "@/components/StatCard";
import InformationPanel from "@/components/InformationPanel";
import TempChart from "@/components/TempChart";
import RainChart from "@/components/RainChart";
import HumidityChart from "@/components/HumidityChart";
import cleanData from "@/lib/cleanData";
import getBasePath from "@/lib/getBasePath";

// This would revalidate cache after 60 seconds. This prevents outdated information for users who might already have requested for certain places and
//trying to query again.
export const revalidate = 1440;

// Next.js has async await functionality. It has server components by default?
type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();
  // The variables are mapped to the parameters inside MyQuery in featherWeatherQuery.
  // Daily, hourly have been assigned default values.
  // try {
  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });
  // This myQuery is the one present the index.graphql file
  const results: Root = data.myQuery;

  // const dataToSend = cleanData(results, city);

  // console.log(dataToSend);

  // const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     weatherData: dataToSend,
  //   }),
  // });

  // const GPTData = await res.json();

  // const { content } = GPTData;

  // console.log(results.hourly.precipitation_probability);

  // Flex column should be for the entire eight of a screen but for a medium screen, change the column// city selector to row.
  return (
    <div className="flex flex-column min-h-screen md:flex-row">
      <InformationPanel city={city} long={long} lat={lat} results={results} />

      <div>
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Overview</h2>
            <p className="text-sm text-gray-400">
              Last updated at:{" "}
              {new Date(results.current_weather.time).toLocaleString()} (2
              {results.timezone})
            </p>
          </div>
          <div className="overflow-hidden text-xl font-mono">
            {/* <CalloutCard message={content} /> */}
            {/* <CalloutCard
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
            progresses, it will rise to a moderate level of 8.1. So, don't forget to wear your sunscreen and protect your skin from those harmful rays. That's all for today's weather summary from Nishanth Studios! Remember to stay hydrated, wear appropriate clothing, and enjoy the day. Stay tuned for more exciting weather updates right here. Have a fantastic day ahead!`} */}
            {/* /> */}
            {
              <CalloutCard message="This is where the GPT summary usually goes....." />
            }
          </div>

          {/* 0 means today for daily temperature. 1 means tomorrow and so on.  */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Maximum Temperature"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}`}
              color="yellow"
            ></StatCard>

            <StatCard
              title="Minimum Temperature"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}`}
              color="green"
            ></StatCard>

            <div>
              <StatCard
                title="UV Index"
                metric={`${results.daily.uv_index_clear_sky_max[0].toFixed(1)}`}
                color="rose"
              ></StatCard>
              {Number(results.daily.uv_index_clear_sky_max[0].toFixed(1)) >
                5 && (
                <CalloutCard
                  message={
                    "The UV is height today, be sure to apply some suncreen!"
                  }
                  warning
                />
              )}
            </div>
            <div className="flex space-x-3">
              <StatCard
                title="Wind Speed"
                metric={`${results.current_weather.windspeed.toFixed(1)}m/s`}
                color="cyan"
              ></StatCard>

              <StatCard
                title="Wind Direction"
                metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                color="violet"
              ></StatCard>
            </div>
          </div>
        </div>

        <hr className="mb-5" />
        <div className="space-y-3">
          <TempChart results={results} />
          <RainChart results={results} />
          <HumidityChart results={results} />
        </div>
      </div>
    </div>
  );
  // }
  // catch (error) {
  //   console.log("GraphQL query errors:", error);
  //   return <div>Error occurred while fetching weather data</div>;
  // }
}

export default WeatherPage;
