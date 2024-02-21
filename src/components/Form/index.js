import PropTypes from 'prop-types';
import ButtonNumber from './buttonNumber';

function Form({
  prediction, setFavoriteNumber, listOfNumber,
}) {
  const handleChange = (event) => {
    const value = Number(event.target.value);
    setFavoriteNumber(value);
  };

  return (

    <section>
      <form>
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label htmlFor="numberInput">Dis moi ton chiffre préféré. Je te dirai qui tu es</label>
        <input id="numberInput" type="text" placeholder="saisir un nombre" onChange={handleChange} />
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
