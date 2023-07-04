import PropTypes from "prop-types";
import styles from "./CityItem.module.css";

CityItem.propTypes = {
  city: PropTypes.object,
};

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date } = city;
  console.log();
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}> {emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <buton className={styles.deleteBtn}>&times;</buton>
    </li>
  );
}

export default CityItem;
