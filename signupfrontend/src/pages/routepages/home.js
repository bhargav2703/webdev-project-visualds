import React from 'react';
import Content from './content';
// import '../../App.css';
// import Cards from '../Cards';
// import HeroSection from '../HeroSection';
// import Footer from '../Footer';
import MainPage from './main';
function Home() {
  return (
    <>
    {/* <button onClick={Content}></button> */}
      <MainPage />
      
      <Content/>
      {/* <Cards /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;
