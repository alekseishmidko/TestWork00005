import { create } from "zustand";
import { WeatherApiForecast } from "@/shared/types/weather";
import { weatherService } from "@/shared/services/weather";
import { message } from "antd";
import "@ant-design/v5-patch-for-react-19";
interface ForecastState {
  forecast: WeatherApiForecast | null;
  isLoading: boolean;
  error: string | null;
  fetchForecast: (city: string, days?: number) => Promise<void>;
}

export const useForecast = create<ForecastState>((set) => ({
  forecast: null,
  isLoading: false,
  error: null,

  fetchForecast: async (city: string, days?: number) => {
    set({ isLoading: true, error: null });

    try {
      const data = await weatherService.getForecast({ city, days });

      set({ forecast: data ?? null, isLoading: false });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      set({
        forecast: null,
        isLoading: false,
        error: errorMessage,
      });
      message.error("Failed to fetch weather forecast");
    }
  },
}));
