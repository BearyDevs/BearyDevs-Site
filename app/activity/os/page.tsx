import { Metadata } from "next";
import { weeklyOperatingSystems } from "@/app/libs/actions";

export const metadata: Metadata = {
  title: "Operating Systems Activity",
  description: "This week I spent my time using these operating systems.",
};

export default async function EditorPage() {
  const { data } = await weeklyOperatingSystems();

  if (!data) {
    return (
      <>
        <h1 className="mb-4 text-base text-gray-200 md:text-xl font-semibold">
          Weekly Operating Systems Activity
        </h1>
        <h2 className="text-sm">No data</h2>
      </>
    );
  }

  return (
    <>
      <h1 className="mb-4 text-base text-gray-200 md:text-xl font-semibold">
        Weekly Operating Systems Activity
      </h1>
      <ul className="text-sm text-gray-400">
        {data.map((item) => (
          <li key={item.name} className="flex items-center justify-between">
            <p className="w-40 shrink-0 truncate !text-sm">{item.name}</p>

            <div className="hidden h-1 w-full bg-[#232323] md:block">
              <div
                className="h-1 w-full bg-gray-200"
                style={{ width: `${item.percent}%` }}
              />
            </div>

            <p className="w-24 text-end">{item.percent} %</p>
          </li>
        ))}
      </ul>
    </>
  );
}
