import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavouriteCitiesState = {
  favourites: string[];
  toggleFavouriteCity: (city: string) => void;
  isFavourite: (city: string) => boolean;
  clearAll: () => void;
};

export const useFavouriteCities = create<FavouriteCitiesState>()(
  persist(
    (set, get) => ({
      favourites: [],
      toggleFavouriteCity: (city: string) => {
        const normalizedCity = city.trim().toLowerCase();
        const current = get().favourites;

        if (current.includes(normalizedCity)) {
          set({ favourites: current.filter((c) => c !== normalizedCity) });
        } else {
          set({ favourites: [...new Set([...current, normalizedCity])] });
        }
      },
      isFavourite: (city: string) => {
        return get().favourites.includes(city);
      },
      clearAll: () => {
        set({ favourites: [] });
      },
    }),
    {
      name: "weather-favourite-cities",
    }
  )
);
