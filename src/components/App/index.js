import Form from 'src/components/Form';
import Infos from 'src/components/Infos';
import Header from 'src/components/Header';
import data from 'src/components/App/data';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // j'initialise mon state
      favouriteNumber: false,
    };
    // this.setFavorite = this.setFavorite.bind(this);
  }

  render() {
    const { favouriteNumber } = this.state; // je le lis
    const foundPrediction = data.find((currentValue) => currentValue.number === favouriteNumber);

    let message;
    if (foundPrediction) {
      message = foundPrediction.sentence;
    }
    else {
      message = 'Je ne vois rien';
    }

    // je prepare la fonction qui sait modifier le state
    const setFavoriteNumber = (newValue) => {
      this.setState({
        favouriteNumber: newValue,
      });
    };

    return (
      <div className="app">
        <Header />
        <Form
         // je diffuse le state via les props pour parametrer mon affichage en fonction de sa valeur
          prediction={message}
          // je diffuse ma foonction qui sait modifier le state
          setFavoriteNumber={setFavoriteNumber}
          listOfNumber={data}
        />
        {typeof favouriteNumber === 'number' && <Infos number={favouriteNumber} />}

      </div>
    );
  }
}

export default App;
