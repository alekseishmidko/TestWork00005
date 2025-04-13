import type { WeatherApiCurrentResponse } from "@/shared/types/weather";
import { Card, Descriptions } from "antd";
import type { FC } from "react";
import styles from "./WeatherCard.module.scss";
import { formatDate } from "@/shared/utils/formatDate";

type Props = { data: WeatherApiCurrentResponse };

export const WeatherCard: FC<Props> = ({ data }) => {
  const { location, current } = data;
  const currentDate = formatDate(new Date(location.localtime));

  return (
    <Card
      title={
        <span className={styles.title}>
          Weather in {location.name}, {location.country}
          <br /> at {currentDate}
        </span>
      }
      className={styles.wrapper}
    >
      <div className="d-flex align-items-center gap-3">
        <p className="fs-4 fw-semibold mb-0 text-primary">
          {Math.round(current.temp_c)}°C
        </p>
        <p className="mb-0 fs-5 text-primary text-capitalize">
          {current.condition.text}
        </p>
      </div>

      <Descriptions
        column={1}
        size="default"
        style={{ marginTop: 16, color: "#003a8c", fontSize: 24 }}
      >
        <Descriptions.Item label="Feels like">
          {Math.round(current.feelslike_c)}°C
        </Descriptions.Item>
        <Descriptions.Item label="Humidity">
          {current.humidity}%
        </Descriptions.Item>
        <Descriptions.Item label="Pressure">
          {current.pressure_mb} hPa
        </Descriptions.Item>
        <Descriptions.Item label="Cloudiness">
          {current.cloud}%
        </Descriptions.Item>
        <Descriptions.Item label="Wind">
          {current.wind_kph} km/h
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};
