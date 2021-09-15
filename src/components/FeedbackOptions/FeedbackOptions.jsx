import PropTypes from 'prop-types';
import { Buttons } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Buttons>
      {options.map(option => {
        const label = option.replace(option[0], option[0].toUpperCase());
        return (
          <button key={option} onClick={() => onLeaveFeedback(option)}>
            {label}
          </button>
        );
      })}
    </Buttons>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export { FeedbackOptions };
