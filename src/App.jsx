import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Option from "./components/Option/Option";

export default function App() {
  const [count, setCount] = useState(() => {
    const savedState = localStorage.getItem("feedbackState");
    if (savedState) {
      return JSON.parse(savedState);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("feedbackState", JSON.stringify(count));
  }, [count]);

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

  const totalFeedback = count.good + count.neutral + count.bad;
  const positivePercentage =
    totalFeedback > 0 ? ((count.good / totalFeedback) * 100).toFixed(2) : 0;

  return (
    <>
      <Description />
      <Option updateFeedback={updateFeedback} hasFeedback={totalFeedback > 0} />
      {totalFeedback > 0 ? (
        <Feedback
          good={count.good}
          neutral={count.neutral}
          bad={count.bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
}
