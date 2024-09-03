import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css'; // Assuming you are using CSS Modules

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.buttonContainer}>
    {options.map(option => (
      <button
        key={option}
        type="button"
        className={styles.button}
        onClick={() => onLeaveFeedback(option)}
      >
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;