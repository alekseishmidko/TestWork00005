import { axiosInstanse } from "../api/instanse";
import {
  WeatherApiCurrentResponse,
  WeatherApiForecast,
} from "../types/weather";
import * as yup from "yup";

export type ForecastBody = { lat: number; lon: number };
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY required!");
}
const cityValidator = yup.object({
  city: yup.string().required("City is required"),
  days: yup.number().optional(),
});

export async function getWeather({ city }: { city: string }) {
  try {
    const validData = cityValidator.validateSync({ city });
    const { data } = await axiosInstanse<WeatherApiCurrentResponse>({
      url: `https://api.weatherapi.com/v1/current.json`,
      method: "GET",
      params: {
        key: API_KEY,
        q: validData.city,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((data as any)?.error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      throw new Error((data as any).error.message);
    }
    return data;
  } catch {
    throw new Error("Unknown error");
  }
}
export async function getForecast({
  city,
  days,
}: {
  city: string;
  days?: number;
}) {
  try {
    const validData = cityValidator.validateSync({ city, days });

    const { data } = await axiosInstanse<WeatherApiForecast>({
      url: `https://api.weatherapi.com/v1/forecast.json`,
      method: "GET",
      params: {
        key: API_KEY,
        q: validData.city,
        days: validData.days ?? 3,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((data as any)?.error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      throw new Error((data as any).error.message);
    }

    return data;
  } catch {
    throw new Error("Unknown error");
  }
}

export const weatherService = { getWeather, getForecast };
