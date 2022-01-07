import react from "react";
import propTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ title = "Upload stats", stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>
        {title.length > 0 ? title : title.length < 0}
      </h2>
      <ul className={styles.stat_list}>
        {stats.map((stat) => (
          <li
            key={stat.id}
            className={styles.item}
            style={{ background: getRandomHexColor() }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default Statistics;

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
};
