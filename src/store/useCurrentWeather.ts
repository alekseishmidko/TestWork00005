import { create } from "zustand";
import { WeatherApiCurrentResponse } from "@/shared/types/weather";
import { weatherService } from "@/shared/services/weather";
import { message } from "antd";
interface CurrentWeatherState {
  weather: WeatherApiCurrentResponse | null;
  isLoading: boolean;
  error: string | null;
  fetchWeather: (city: string) => Promise<void>;
}

export const useCurrentWeather = create<CurrentWeatherState>((set) => ({
  weather: null,
  isLoading: false,
  error: null,

  fetchWeather: async (city: string) => {
    set({ isLoading: true, error: null });

    try {
      const data = await weatherService.getWeather({ city });

      set({ weather: data ?? null, isLoading: false });
    } catch {
      set({
        error: "Failed to fetch weather data",
        weather: null,
        isLoading: false,
      });
      message.error("Failed to fetch weather data");
    }
  },
}));
