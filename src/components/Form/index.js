import PropTypes from 'prop-types';
import ButtonNumber from './buttonNumber';

function Form({ prediction }) {
  return (
    <section>
      <form>
        <label htmlFor="numberInput">Dis moi ton chiffre préféré. Je te dirai qui tu es</label>
        <input id="numberInput" type="text" />
      </form>
      <div>
        <button type="button">Effacer</button>
        <ButtonNumber number={0} />
        <ButtonNumber number={1} />
        <ButtonNumber number={2} />
        <ButtonNumber number={3} />
        <ButtonNumber number={4} />
        <ButtonNumber number={5} />
        <ButtonNumber number={6} />
        <ButtonNumber number={7} />
        <ButtonNumber number={8} />
        <ButtonNumber number={9} />
      </div>
      <p>{prediction}</p>
    </section>
  );
}

Form.propTypes = {
  prediction: PropTypes.string.isRequired,
};
export default Form;
