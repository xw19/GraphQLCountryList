import React from 'react';
import Continents from './components/Continents'
import Countries from './components/Countries'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
   constructor(props) {
     super(props)
     this.state = {continent: null};
   }

   handleClick = (event) => {
    if (event.target.value) {
      const value = event.target.value;
      this.setState({
        continent: value
      });
    }
   }


  render() {
    return (
      <div className="App container">
        <div className="jumbotron">
          <h1>Countries by continents</h1>
        </div>
        <Continents onSelect={(event) => this.handleClick(event)}/>
        {this.state.continent ? <Countries code={this.state.continent} /> : ''}
      </div>
    );
  }
}

export default App;
