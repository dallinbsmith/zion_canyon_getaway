import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Booking from "./components/Pages/Booking";
import Contact from "./components/Pages/Contact";
import Accomodations from "./components/Pages/Accomodations";
import Navbar from "./components/Navbar";
import { Layout } from "antd";

import './sass/root.scss';
import "./sass/App.scss";

const { Header, Footer } = Layout;

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Header><Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/accomodations" component={Accomodations} />
            <Route path="/booking" component={Booking} />
            <Route path="/contact" component={Contact} /></Header>
            <Footer>Footer</Footer>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
