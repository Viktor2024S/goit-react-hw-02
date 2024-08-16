import styles from "./Option.module.css";

export default function Option({ updateFeedback }) {
  const handleButtonClick = (feedbackType) => {
    updateFeedback(feedbackType);
  };

  return (
    <div className={styles.option}>
      <button className={styles.btn} onClick={() => handleButtonClick("good")}>
        Good
      </button>
      <button
        className={styles.btn}
        onClick={() => handleButtonClick("neutral")}
      >
        Neutral
      </button>
      <button className={styles.btn} onClick={() => handleButtonClick("bad")}>
        Bad
      </button>
      <button className={styles.btn} onClick={() => handleButtonClick("reset")}>
        Reset
      </button>
    </div>
  );
}
