import { Card } from "antd";
import type { FC } from "react";
import { StarFilled } from "@ant-design/icons";
type Props = {
  city: string;

  onToggleFavourite: () => void;
};

export const FavouriteCityCard: FC<Props> = ({
  city,

  onToggleFavourite,
}) => {
  return (
    <Card
      onClick={onToggleFavourite}
      className="d-flex justify-content-between align-items-center px-3 py-2 w-100 h-auto overflow-hidden"
      style={{
        cursor: "pointer",
      }}
    >
      <div className="d-flex justify-content-between align-items-center w-100 px-3 py-2">
        <span className="fw-semibold text-primary text-truncate">{city}</span>
        <StarFilled className="text-warning fs-5" />
      </div>
    </Card>
  );
};
