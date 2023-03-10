import React from 'react';
import css from '../Statistics/Statistics.module.css';

export const Statictics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total !== 0 ? (
    <div className={css.wrapper}>
      <h2> Statictics </h2>
      <p className={css.statistic__good}> Good : {good}</p>
      <p className={css.statistic__neutral}> Neutral : {neutral}</p>
      <p className={css.statistic__bad}>Bad : {bad}</p>
      <p>Total : {total}</p>
      <p>Positive Feedbacks : {positivePercentage} %</p>
    </div>
  ) : (
    <p className={css.statistic__text}> Please leave feedback </p>
  );
};
