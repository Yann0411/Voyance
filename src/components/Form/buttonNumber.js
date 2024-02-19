import PropTypes from 'prop-types';

function ButtonNumber({ number }) {
  const handleClick = () => {
    console.log(`je veux changer de nombre ${number}`);
  };

  return (
    <button onClick={handleClick} type="button">{number}</button>
  );
}

ButtonNumber.propTypes = {
  number: PropTypes.number.isRequired,
};

export default ButtonNumber;
