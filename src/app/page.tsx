import { weatherService } from "@/shared/services/weather";
import styles from "./page.module.css";

import { WeatherCard } from "@/features/weather-card/WeatherCard";

export default async function Home() {
  const weather = await weatherService.getCurrentWeather({
    lat: 45.0703,
    lon: 7.6869,
  });
  console.log(weather);
  return (
    <section
      className="d-flex justify-content-center align-items-center "
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <WeatherCard data={weather} />
    </section>
  );
}
