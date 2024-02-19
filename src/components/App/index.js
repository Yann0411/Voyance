import Form from 'src/components/Form';
import Infos from 'src/components/Infos';
import Header from 'src/components/Header';
import data from 'src/components/App/data';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // j'initialise mon state
      favouriteNumber: 4,
    };
  }

  render() {
    const { favouriteNumber } = this.state; // je le lis
    const foundPrediction = data.find((currentValue) => currentValue.number === favouriteNumber);

    return (
      <div className="app">
        <Header />
        <Form
         // je le diffuse via les props pour parametrer mon affichage en fonction de sa valeur 
          prediction={foundPrediction.sentence}
        />
        <Infos number={favouriteNumber} />

      </div>
    );
  }
}

export default App;
