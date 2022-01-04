import react from "react";
import propTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ title = "Upload stats", stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title.length > 0 ? title : title.length < 0}</h2>
      <ul className="stat-list">
        {stats.map((stat) => (
          <li
            key={stat.id}
            className="item"
            style={{ background: getRandomHexColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
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
