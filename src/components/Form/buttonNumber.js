import PropTypes from 'prop-types';

function ButtonNumber({ number }) {
  return (
    <button type="button">{number}</button>
  );
}

ButtonNumber.propTypes = {
  number: PropTypes.number.isRequired,
};

export default ButtonNumber;
