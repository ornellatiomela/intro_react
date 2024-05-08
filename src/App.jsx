import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class Carte extends Component {
  render() {
    return (
      <>
      <p>nom complet: ornella tiomela</p>
      <br />
      <p>Email:ornellatiomela@gmail.com</p>
      </>
    )
  }
}
import{Component}from 'react';
class Photoprofil extends Component {
  render(){
    return(
      <>
     <img src="profil.PNG" alt="mon profil" /> 

      </>
    )
  }
}
export default class App extends components {
  render(){
    return(
      <>
      <h3> Composant App </h3> 
      <Profil/>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Carte />
    </div>
  );
}

export default App;

// export default class App extends Componnents {
//   render(){
//     return(
//     <>
//     <h3> Composant App </h3>
//     <Carte/>
//     </>      
//     )
//   }
// }