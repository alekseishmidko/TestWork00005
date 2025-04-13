import { Card, Descriptions } from "antd";
import type { FC } from "react";
import { ForecastDay } from "@/shared/types/weather"; // Убедись, что путь правильный

type Props = {
  data: ForecastDay;
};

export const DayForecastCard: FC<Props> = ({ data }) => {
  const { date, day, astro } = data;

  return (
    <Card
      title={
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold text-primary">{date}</span>
        </div>
      }
      className="mb-3 shadow-sm"
      style={{
        backgroundColor: "#e6f7ff",
        border: "1px solid #91d5ff",
        borderRadius: 12,
      }}
    >
      <p className="text-primary text-capitalize fw-semibold text-center mb-3">
        {day.condition.text}
      </p>

      <Descriptions
        column={1}
        size="small"
        labelStyle={{ fontWeight: 600, fontSize: 16 }}
        contentStyle={{ fontSize: 16 }}
      >
        <Descriptions.Item label="Average temperature">
          {day.avgtemp_c}°C
        </Descriptions.Item>
        <Descriptions.Item label="Min / Max temperature">
          {day.mintemp_c}°C / {day.maxtemp_c}°C
        </Descriptions.Item>
        <Descriptions.Item label="Max wind">
          {day.maxwind_kph} km/h
        </Descriptions.Item>
        <Descriptions.Item label="Chance of rain">
          {day.daily_chance_of_rain}%
        </Descriptions.Item>
        <Descriptions.Item label="Precipitation">
          {day.totalprecip_mm} mm
        </Descriptions.Item>
        <Descriptions.Item label="Humidity">
          {day.avghumidity}%
        </Descriptions.Item>
        <Descriptions.Item label="Sunrise / Sunset">
          {astro.sunrise} / {astro.sunset}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};
