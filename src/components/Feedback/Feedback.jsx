import styles from "./Feedback.module.css";

export default function Feedback() {
  return (
    <div className={styles.feedback}>
      <ul>
        <li className="item">Good: {}</li>
        <li className="item">Neutral: {}</li>
        <li className="item">Bad: {}</li>
        <li className="item">Total: {}</li>
        <li className="item">Positive: {}</li>
      </ul>
    </div>
  );
}
