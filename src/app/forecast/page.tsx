"use client";

import { ForecastCard } from "@/features/forecast-card/ForecastCard";
import { useCityStore } from "@/store/useCityStore";
import { useForecast } from "@/store/useForecast";
import { Spin } from "antd";
import { useEffect } from "react";

export default function Forecast() {
  const { city } = useCityStore();

  const { forecast, isLoading, fetchForecast } = useForecast();

  useEffect(() => {
    fetchForecast(city);
  }, [city, fetchForecast, forecast]);

  return (
    <section className="container d-flex justify-content-center align-items-start  mt-4 gap-2 flex-column">
      {city ? (
        <h2>{`Forecast for city: ${city}`}</h2>
      ) : (
        <h2>Please choose a city!</h2>
      )}
      {isLoading && !forecast ? (
        <Spin />
      ) : (
        forecast &&
        forecast?.forecast?.forecastday?.map((item, index) => (
          <ForecastCard data={item} key={index} />
        ))
      )}
    </section>
  );
}
