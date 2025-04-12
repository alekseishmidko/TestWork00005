import { WeatherResponse } from "@/shared/types/weather";
import { Card, Descriptions } from "antd";
import type { FC } from "react";
import styles from "./WeatherCard.module.scss";
type Props = { data: WeatherResponse };

export const WeatherCard: FC<Props> = ({ data }) => {
  const { name, main, weather, wind, clouds, sys } = data;

  return (
    <Card
      title={
        <span className={styles.title}>
          Weather in {name}, {sys.country}
        </span>
      }
      className={styles.wrapper}
    >
      <div className="d-flex align-items-center gap-3">
        <p className="fs-4 fw-semibold mb-0 text-primary">
          {Math.round(main.temp)}°C
        </p>
        <p className="mb-0 fs-5 text-primary text-capitalize">
          {weather[0].description}
        </p>
      </div>

      <Descriptions
        column={1}
        size="default"
        style={{ marginTop: 16 }}
        labelStyle={{ fontWeight: 700, color: "#003a8c", fontSize: 24 }}
        contentStyle={{
          color: "#003a8c",
          fontSize: 24,
        }}
      >
        <Descriptions.Item label="Feels like">
          {Math.round(main.feels_like)}°C
        </Descriptions.Item>
        <Descriptions.Item label="Humidity">{main.humidity}%</Descriptions.Item>
        <Descriptions.Item label="Pressure">
          {main.pressure} hPa
        </Descriptions.Item>
        <Descriptions.Item label="Cloudiness">{clouds.all}%</Descriptions.Item>
        <Descriptions.Item label="Wind">{wind.speed} m/s</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};
