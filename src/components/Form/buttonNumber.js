import PropTypes from 'prop-types';

function ButtonNumber({ numero, setFavoriteNumber }) {
  const handleClick = () => {
    setFavoriteNumber(numero);
  };

  return (
    <button onClick={handleClick} type="button">{numero}</button>
  );
}

ButtonNumber.propTypes = {
  numero: PropTypes.number.isRequired,
  setFavoriteNumber: PropTypes.func.isRequired,
};

export default ButtonNumber;
