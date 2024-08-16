import styles from "./Feedback.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={styles.feedback}>
      <ul>
        <li className="item">Good: {good}</li>
        <li className="item">Neutral: {neutral}</li>
        <li className="item">Bad: {bad}</li>
        <li className="item">Total: {total}</li>
        <li className="item">Positive: {positivePercentage}%</li>
      </ul>
    </div>
  );
}
