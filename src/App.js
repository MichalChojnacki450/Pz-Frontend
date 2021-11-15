import logo from './logo.svg';
import './App.css';
import react from 'react';

class App extends react.Component{
  constructor(props){
    super(props)
    this.state={apiResponse:""};
  }

  callAPI(){
    fetch("http://localhost:3000/testAPI")
    .then(res =>res.text())
    .them(res => this.setState({apiResponse:res}));
  }
  ComponentWillMount(){
    this.callAPI();
  }


render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <p>{this,state.apiResponse}</p>
    </div>
  );
}
}

export default App;
