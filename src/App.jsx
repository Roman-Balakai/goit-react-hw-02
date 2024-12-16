import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [review, setReview] = useState(() => {
    const savedReview = window.localStorage.getItem("saved-clicks");
    if (savedReview !== null) {
      return JSON.parse(savedReview);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(review));
  }, [review]);

  const updateFeedback = (feedbackType) => {
    setReview((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  const totalFeedback = review.good + review.neutral + review.bad;
  const reviewReset = () => {
    setReview({ good: 0, neutral: 0, bad: 0 });
  };
  const positiveFeedback = totalFeedback
    ? Math.round((review.good / totalFeedback) * 100)
    : 0;
  return (
    <>
      <Description />
      <Options
        handleClick={updateFeedback}
        handleReset={reviewReset}
        total={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={review.good}
          neutral={review.neutral}
          bad={review.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </>
  );
};
export default App;
