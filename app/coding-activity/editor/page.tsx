import { Metadata } from "next";
import { weeklyCodeEditor } from "@/app/libs/actions";

export const metadata: Metadata = {
  title: "Code Editor Activity",
  description: "This week I spent my time coding in these code editors.",
};

export default async function EditorPage() {
  const { data } = await weeklyCodeEditor();

  return (
    <>
      <h1 className="mb-4 text-base text-gray-200 md:text-xl">
        Weekly Code Editor Activity
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
