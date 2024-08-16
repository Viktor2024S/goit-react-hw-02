import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Option from "./components/Option/Option";

export default function App() {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setCount({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else {
      setCount((prevCount) => ({
        ...prevCount,
        [feedbackType]: prevCount[feedbackType] + 1,
      }));
    }
  };

  const total = count.good + count.neutral + count.bad;
  const positivePercentage =
    total > 0 ? ((count.good / total) * 100).toFixed(2) : 0;

  return (
    <>
      <Description />
      <Option updateFeedback={updateFeedback} />
      <Feedback
        good={count.good}
        neutral={count.neutral}
        bad={count.bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </>
  );
}
