import React from "react";
import styles from "./Goal.module.css";
import GoalInput from "./GoalInput";
import GoalTitle from "./GoalTitle";

const Goal = ({ setGoals }) => {
  const onSaveGoal = (goal) => {
    setGoals(goal);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Goal</h1>
      <GoalInput onSaveGoal={onSaveGoal} />
      <GoalTitle input={displayInputs} />
    </div>
  );
};

export default Goal;
