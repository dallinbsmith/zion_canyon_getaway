import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Accomodations from './components/Accomodations';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path = '/' component = {Home} />
        <Route path = '/accomodations' component = {Accomodations} />
        <Route path = '/booking' component = {Booking} />
        <Route path = '/contact' component = {Contact} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
