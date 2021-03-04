import React, { Component } from 'react';
import Reflections from './components/Reflections';

const url = 'http://localhost:3000/api/reflection';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <main>
      //   <h1>Hello World</h1>
      // </main>
      <div className="App">
        <h1>m y m i n d f u l j o u r n a l</h1>
        <input type="text" name="reflection" id="reflectionInput"></input>
        <button type="submit" id="reflectionBtn">
          Submit
        </button>
        <Reflections journalUrl={url} />
      </div>
    );
  }
}

export default App;
