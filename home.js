import React from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('root');

class Heroes extends React.Component {
  constructor(){
    super();
    this.heroes = ['ursa', 'io', 'anti-mage'];
  }
  map(){
    return this.heroes.map(hero => <li key={hero.toString()}>{hero}</li>)
  }
  emit(){
      
  }
  render(){
    return (
      <ul>
        {this.map()}
      </ul>
    )
  }
}

class App extends React.Component {
  render() {
    return <div>Hello
      <Heroes />
    </div>;
  }
}

React.render(<App/>, mountNode);