import Form from 'src/components/Form';
import Infos from 'src/components/Infos';
import Header from 'src/components/Header';
import data from 'src/components/App/data';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // j'initialise mon state
      favouriteNumber: '',
    };
    // this.setFavorite = this.setFavorite.bind(this);
  }

  render() {
    const { favouriteNumber } = this.state; // je le lis
    const foundPrediction = data.find((currentValue) => (
      currentValue.number === parseInt(favouriteNumber) || currentValue.text === favouriteNumber
    ));
    console.log(foundPrediction);

    // const message = foundPrediction ? founcPreiction.sentence : 'Je ne vois rien' ;
    let message;
    if (foundPrediction) {
      message = foundPrediction.sentence;
    }
    else {
      message = 'Je ne vois rien';
    }
    console.log(message);

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
          // je diffuse ma fonction qui sait modifier le state
          setFavoriteNumber={setFavoriteNumber}
          listOfNumber={data}
          favouriteNumber={favouriteNumber}
        />
        { message !== 'Je ne vois rien' && <Infos number={foundPrediction.number} />}

      </div>
    );
  }
}

export default App;
