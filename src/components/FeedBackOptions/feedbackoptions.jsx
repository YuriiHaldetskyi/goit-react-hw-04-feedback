import css from '../FeedBackOptions/feedbackoptions.module.css';
export const FeedbackOptions = ({ options, onChange }) => {
  return (
    <div className={css.wrapper}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onChange}
          className={css.btn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
