import PropTypes from 'prop-types';
import ButtonNumber from './buttonNumber';

function Form({ prediction, setFavoriteNumber, listOfNumber }) {
  return (
    <section>
      <form>
        <label htmlFor="numberInput">Dis moi ton chiffre préféré. Je te dirai qui tu es</label>
        <input id="numberInput" type="text" />
      </form>
      <div>
        <button type="button">Effacer</button>
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
};
export default Form;
