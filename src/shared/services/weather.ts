import { axiosInstanse } from "../api/instanse";
import { WeatherResponse } from "../types/weather";
import * as yup from "yup";

export type ForecastBody = { lat: number; lon: number };
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY required!");
}

export const coordinatesValidator = yup.object({
  lat: yup
    .number()
    .required("Latitude required")
    .min(-90, "Latitude cant be less -90")
    .max(90, "Latitude cant be more 90"),

  lon: yup
    .number()
    .required("Longitude required")
    .min(-180, "Longitude cant be less -180")
    .max(180, "Longitude cant be more 180"),
});
export async function getCurrentWeather(body: ForecastBody) {
  const validatedBody = coordinatesValidator.validateSync(body);
  const { lat, lon } = validatedBody;
  const { data } = await axiosInstanse<WeatherResponse>({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    method: "GET",
  });

  return data;
}

export async function getForecast16D(body: ForecastBody) {
  const validatedBody = coordinatesValidator.validateSync(body);
  const { lat, lon } = validatedBody;

  const { data } = await axiosInstanse<WeatherResponse>({
    url: `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    method: "GET",
  });

  return data;
}

export const weatherService = { getCurrentWeather, getForecast16D };
