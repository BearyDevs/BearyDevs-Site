import { Metadata } from "next";
import { weeklyCodingLanguanges } from "@/app/libs/actions";

export const metadata: Metadata = {
  title: "Activity Languages",
  description: "This week I spent my time coding in these languages.",
};

export default async function CodingActivityLanguagesPage() {
  const { data } = await weeklyCodingLanguanges();

  return (
    <>
      <h1 className="mb-4 text-base text-gray-200 md:text-xl font-semibold">
        Weekly Coding Languages
      </h1>
      <ul className="text-sm text-gray-400">
        {data.map((item) => (
          <li key={item.name} className="flex items-center justify-between">
            <div className="flex w-40 shrink-0 items-center gap-x-2 truncate">
              <div
                className="h-1 w-1"
                style={{ backgroundColor: item.color }}
              />
              <p>{item.name}</p>
            </div>

            <div className="hidden h-1 w-full bg-[#232323] md:block">
              <div
                className="h-1 w-full bg-gray-200"
                style={{
                  width: `${item.percent}%`,
                }}
              />
            </div>

            <p className="w-24 shrink-0 text-end">{item.percent}%</p>
          </li>
        ))}
      </ul>
    </>
  );
}
