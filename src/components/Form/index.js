import PropTypes from 'prop-types';
import ButtonNumber from './buttonNumber';

function Form({
  prediction, setFavoriteNumber, listOfNumber, favouriteNumber,
}) {
  const handleChange = (event) => {
    setFavoriteNumber(event.target.value);
  };

  const handleClick = () => {
    setFavoriteNumber('');
  };

  return (

    <section>
      <form>
        <label htmlFor="numberInput">Dis moi ton chiffre préféré. Je te dirai qui tu es</label>
        <input id="numberInput" type="text" placeholder="saisir un nombre" onChange={handleChange} value={favouriteNumber} />
      </form>
      <div>
        <button onClick={handleClick} type="button">Effacer</button>
        {
          listOfNumber.map((item) => <ButtonNumber key={item.number} setFavoriteNumber={setFavoriteNumber} numero={item.number} />)

        }

      </div>
      <p>{prediction}</p>
    </section>

  );
}

Form.propTypes = {
  prediction: PropTypes.string.isRequired,
  setFavoriteNumber: PropTypes.func.isRequired,
  listOfNumber: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number.isRequired,
  })).isRequired,
  favouriteNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};
export default Form;
