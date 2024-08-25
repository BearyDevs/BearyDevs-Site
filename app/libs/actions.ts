import { unstable_cache } from "next/cache";
import type * as Wakatime from "@/app/types/wakatime";
import type { UmamiStats } from "@/app/types/umami";
import { ENV } from "./constants";

export const umamiStats = unstable_cache(
  async () => {
    const now = new Date();
    const startOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    ).getTime();
    const endAt = now.getTime();
    const url = `${ENV.UMAMI_URL}?startAt=${startOfDay}&endAt=${endAt}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-umami-share-token": ENV.UMAMI_SHARE_TOKEN,
      },
      cache: "no-store",
    });

    return res.json() as Promise<UmamiStats>;
  },
  ["umami-stats"],
  { revalidate: 3600 }, // 1 hours
);

export const weeklyCodingActivity = unstable_cache(
  async () => {
    const res = await fetch(
      "https://wakatime.com/share/@3b5f442c-0f4a-4621-9df5-3641fafed13f/bb30b398-9961-4130-937e-06e487a3bc21.json",
      {
        cache: "no-store",
      },
    );
    return res.json() as Promise<Wakatime.WeeklyCodingActivity>;
  },
  ["wakatime-weekly-coding-activity"],
  { revalidate: 3600 }, // 1 hours
);

export const weeklyCodingLanguanges = async () => {
  const res = await fetch(
    "https://wakatime.com/share/@3b5f442c-0f4a-4621-9df5-3641fafed13f/0a346458-352a-4376-8dfa-c0ea50c04814.json",
    {
      cache: "no-store",
    },
  );
  return res.json() as Promise<Wakatime.WeeklyCodingLanguanges>;
};

export const weeklyCodeEditor = async () => {
  const res = await fetch(
    "https://wakatime.com/share/@3b5f442c-0f4a-4621-9df5-3641fafed13f/d3b63289-391f-4299-afb8-b633ce9d2231.json",
    {
      cache: "no-store",
    },
  );
  return res.json() as Promise<Wakatime.WeeklyCodeEditor>;
};

export const weeklyOperatingSystems = async () => {
  const res = await fetch(
    "https://wakatime.com/share/@3b5f442c-0f4a-4621-9df5-3641fafed13f/f088a94a-3c88-46f7-91d6-a4482c89be25.json",
    {
      cache: "no-cache",
    },
  );
  return res.json() as Promise<Wakatime.WeeklyCodeEditor>;
};
