// import { weatherService } from "@/shared/services/weather";
// import styles from "./page.module.css";

// import { WeatherCard } from "@/features/weather-card/WeatherCard";
// import { DayForecastCard } from "@/features/forecast-card/ForecastCard";

export default async function Home() {
  // const weather = await weatherService.getWeather({ city: "batumi" });
  // const weather2 = await weatherService.getForecast({ city: "batumi" });

  return (
    <section
      className="d-flex justify-content-center align-items-center "
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      {/* {weather && <WeatherCard data={weather} />}
      {weather2 &&
        weather2.forecast.forecastday.map((item, i) => {
          return <DayForecastCard data={item} key={i} />;
        })} */}
    </section>
  );
}
