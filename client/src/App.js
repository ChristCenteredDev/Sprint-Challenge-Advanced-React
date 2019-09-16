import React from 'react';
import Card from './components/Card';
import './App.css';
import Navbar from './components/NavBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(names => this.setState({ data: names }))
      .catch(err => console.log('Error', err));
  }

  render() {
    return (
      <div>
        <div className='App'>
          <Navbar />
        </div>
        <div className='content'>
          {this.state.data.map(players => (
            <Card players={players} key={players.id} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
