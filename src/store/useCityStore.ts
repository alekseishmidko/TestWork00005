// store/useCityStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CityState {
  city: string;
  setCity: (city: string) => void;
}

export const useCityStore = create<CityState>()(
  persist(
    (set) => ({
      city: "",
      setCity: (city: string) => set({ city }),
    }),
    {
      name: "weather-city",
    }
  )
);
