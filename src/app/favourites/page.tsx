"use client";

import { FavouriteCityCard } from "@/features/favourite-city-card/FavouriteCityCard";
import { useFavouriteCities } from "@/store/useFavouriteCities";

export default function Favourites() {
  const { toggleFavouriteCity, favourites } = useFavouriteCities();

  return (
    <section
      className="container d-flex justify-content-center align-items-start"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className="row justify-content-center gap-3">
        {favourites?.map((item) => (
          <div className="col-auto" key={item}>
            <FavouriteCityCard
              city={item}
              onToggleFavourite={() => {
                toggleFavouriteCity(item);
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
