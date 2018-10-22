import React, {
  Component
} from 'react';

import './App.css'

import Header from './Header';
import Banner from './Banner';

class App extends Component {
  render() {
    return (
      <div className="wrapper"> 
        <Header/>
        <Banner/>
      </div>);
  }
}

export default App;