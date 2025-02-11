import { Metadata } from "next";
import { weeklyCodingActivity } from "@/app/libs/actions";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Weekly Work Time by Day",
  description: "A breakdown of my weekly work time by day.",
};

export default async function ActivityPage() {
  const { data } = await weeklyCodingActivity();

  const maxTotalSeconds = Math.max(
    ...data.map((entry) => entry.grand_total.total_seconds),
  );
  const minTotalSeconds = Math.min(
    ...data.map((entry) => entry.grand_total.total_seconds),
  );

  if (!data) {
    return (
      <>
        <h1 className="mb-4 text-base text-gray-200 md:text-xl font-semibold">
          Weekly Work Time by Day
        </h1>
        <h2 className="text-sm">No data</h2>
      </>
    );
  }

  return (
    <>
      <h1 className="mb-4 text-base text-gray-200 md:text-xl font-semibold">
        Weekly Work Time by Day
      </h1>
      <ul className="text-sm text-gray-400">
        {data.map((item) => (
          <li
            key={item.range.date}
            className="flex items-center justify-between"
          >
            <p className="w-40 shrink-0 truncate !text-sm">{item.range.text}</p>

            <div className="hidden h-1 w-full bg-[#232323] md:block">
              <div
                className="h-1 w-full bg-gray-200"
                style={{
                  width: `${((item.grand_total.total_seconds - minTotalSeconds) / (maxTotalSeconds - minTotalSeconds)) * 100}%`,
                }}
              />
            </div>

            <p className="ml-4 w-32 shrink-0 text-end md:ml-0">
              {item.grand_total.text}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex justify-around items-center flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 py-4 animate-[fadeIn_2s]">
          <Image
            src="https://wakatime.com/share/@3b5f442c-0f4a-4621-9df5-3641fafed13f/fbf4b16a-c12a-4d52-9af0-238cb785b5ed.svg"
            alt="Weekly Coding Activity"
            width={550}
            height={550}
          />

          <Image
            src="https://wakatime.com/share/@3b5f442c-0f4a-4621-9df5-3641fafed13f/ef0d82b6-dfd8-4350-a869-173358d5c7c6.svg"
            alt="Weekly Coding Languages"
            width={550}
            height={550}
          />
        </div>
      </div>
    </>
  );
}
