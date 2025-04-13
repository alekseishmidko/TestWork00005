import type { WeatherApiCurrentResponse } from "@/shared/types/weather";
import { Card, Descriptions } from "antd";
import type { FC } from "react";
import styles from "./WeatherCard.module.scss";
import { formatDate } from "@/shared/utils/formatDate";
import { StarFilled, StarOutlined } from "@ant-design/icons";

type Props = {
  data: WeatherApiCurrentResponse;
  isFavourite?: boolean;
  onToggleFavourite: () => void;
};

export const WeatherCard: FC<Props> = ({
  data,
  isFavourite,
  onToggleFavourite,
}) => {
  const { location, current } = data;
  const currentDate = formatDate(new Date(location.localtime));

  return (
    <Card
      title={
        <div className="d-flex justify-content-between align-items-center">
          <span className={styles.title}>
            Weather in {location.name}, {location.country}
            <br /> at {currentDate}
          </span>
          {typeof isFavourite !== "undefined" && (
            <span
              onClick={onToggleFavourite}
              style={{ fontSize: 20, color: "#fadb14", cursor: "pointer" }}
              title={
                isFavourite ? "Remove from favourites" : "Add to favourites"
              }
            >
              {isFavourite ? <StarFilled /> : <StarOutlined />}
            </span>
          )}
        </div>
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
