import { useState, useEffect } from "react";
import { weeklyCodingActivity, umamiStats } from "@/app/libs/actions";
import { UmamiStats } from "@/app/types/umami";
import { Daum, WeeklyCodingActivity } from "@/app/types/wakatime";

export const useStats = () => {
  const [todayData, setTodayData] = useState<Daum | null>(null);
  const [pageViews, setPageViews] = useState<UmamiStats["pageviews"] | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [weeklyDataResponse, umamiDataResponse] = await Promise.all([
          weeklyCodingActivity(),
          umamiStats(),
        ]);

        const weeklyData: WeeklyCodingActivity = weeklyDataResponse;
        const todayData: Daum = weeklyData.data[weeklyData.data.length - 1];

        const umamiData: UmamiStats = umamiDataResponse;
        const { pageviews } = umamiData;

        setTodayData(todayData);
        setPageViews(pageviews);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { todayData, pageViews, loading, error };
};
