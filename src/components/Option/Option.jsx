import styles from "./Option.module.css";
import { useState } from "react";

export default function Option() {
  const [clicks, setClicks] = useState(0);
  const updateClicks = () => {};
  return (
    <div className={styles.option}>
      <button onClick={updateClicks}>Good</button>
      <button onClick={updateClicks}>Neutral</button>
      <button onClick={updateClicks}>Bad</button>
      <button onClick={updateClicks}>Reset</button>
    </div>
  );
}
