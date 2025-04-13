import Link from "next/link";
import styles from "./Header.module.scss";
import { PUBLIC_URL } from "@/shared/routes/routes";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

export function Header() {
  return (
    <div className={styles.header}>
      <Link href={PUBLIC_URL.home()}>
        <Button size="large" variant="filled">
          Weather App
        </Button>
      </Link>

      <div className="d-flex flex-row gap-2">
        <Link href={PUBLIC_URL.favourites()}>
          <Button size="large" variant="link">
            Forecast
          </Button>
        </Link>
        <Link href={PUBLIC_URL.favourites()}>
          <Button size="large" variant="link">
            Favourites
          </Button>
        </Link>
      </div>
    </div>
  );
}
