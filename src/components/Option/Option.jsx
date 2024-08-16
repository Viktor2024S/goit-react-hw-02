import styles from "./Option.module.css";

export default function Option({ updateFeedback, hasFeedback }) {
  return (
    <div className={styles.option}>
      <button className={styles.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={styles.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={styles.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {hasFeedback && (
        <button className={styles.btn} onClick={() => updateFeedback("reset")}>
          Reset
        </button>
      )}
    </div>
  );
}
