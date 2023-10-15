import React from "react";
// Components
//import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Testimony from "./components/Testimony/Testimony";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Testimony />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
