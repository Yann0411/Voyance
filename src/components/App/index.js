import Form from 'src/components/Form';
import Infos from 'src/components/Infos';
import Header from 'src/components/Header';
import data from 'src/components/App/data';


function App() {
  const favouriteNumber = 10;
  const foundPrediction = data.find((currentValue) => currentValue.number === favouriteNumber);

  return (
    <div className="app">
      <Header />
      <Form prediction={foundPrediction.sentence} />
      <Infos number={favouriteNumber} />

    </div>
  );
}

export default App;
