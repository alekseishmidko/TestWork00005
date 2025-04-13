"use client";
import { FoundCityForm } from "@/features/found-city-form/FoundCityForm";
import { WeatherCard } from "@/features/weather-card/WeatherCard";
import { useCityStore } from "@/store/useCityStore";
import { useCurrentWeather } from "@/store/useCurrentWeather";
import { useFavouriteCities } from "@/store/useFavouriteCities";
import { Spin } from "antd";
import { useEffect } from "react";

export default function Home() {
  const { city, setCity } = useCityStore();
  const { weather, fetchWeather, isLoading } = useCurrentWeather();
  const onSubmitForm = (values: { city: string }) => {
    setCity(values.city);
    fetchWeather(values.city);
  };

  const { isFavourite, toggleFavouriteCity } = useFavouriteCities();
  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city, fetchWeather]);

  return (
    <section
      className="d-flex justify-content-center"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className="d-flex flex-column gap-4 w-100 px-3 mt-4">
        <FoundCityForm onSubmit={onSubmitForm} />
        {isLoading && !weather ? (
          <Spin />
        ) : (
          weather && (
            <WeatherCard
              data={weather}
              isFavourite={isFavourite(city.toLowerCase())}
              onToggleFavourite={() => toggleFavouriteCity(city)}
            />
          )
        )}
      </div>
    </section>
  );
}
