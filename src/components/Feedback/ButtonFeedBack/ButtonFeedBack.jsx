import PropTypes from 'prop-types';
import css from './ButtonFeedBack.module.css'

const ButtonFeedBack = ({ onClickButtonFeedback, buttonName }) => {
  return (
    <div>
      {buttonName.map(name => (
          <button
              className={css}
          type="button"
          key={name}
          onClick={onClickButtonFeedback}
          name={name}
        >
          {name}
        </button>
      ))}
    </div>
  );
};
ButtonFeedBack.propTypes = {
  onClickButtonFeedback: PropTypes.func.isRequired,
  buttonName: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ButtonFeedBack;
