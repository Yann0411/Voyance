import PropTypes from 'prop-types';

function Infos({ number }) {
  let word = 'pair';
  if (number % 2 !== 0) {
    word = 'impair';
  }
  return (
    <div>
      <section>
        <h2>Le savais tu ?</h2>
        <p>Le double de {number} est {number * 2}</p>
        <p>{number} est {word}</p>
      </section>
    </div>
  );
}

Infos.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Infos;
