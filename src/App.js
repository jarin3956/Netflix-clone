
import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPoster from './Components/RowPoster/RowPoster';
import Footer from './Components/Footer/Footer';
import {originals,action,romance,comedy,horror,documentary,inspiration,drama,malayalam,tamil,hindi,kannada} from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPoster url={originals} title='Netflix Originals' />
      <RowPoster url={action} title='Action Movies' isSmall />
      <RowPoster url={romance} title='Romance' isSmall />
      <RowPoster url={comedy} title='Comedy Movies' isSmall />
      <RowPoster url={horror} title='Horror Movies' isSmall />
      <RowPoster url={documentary} title='Documentary' isSmall />
      <RowPoster url={inspiration} title='Inspirational Movies' isSmall />
      <RowPoster url={drama} title='Drama' isSmall />
      <RowPoster url={malayalam} title='Malayalam Movies' isSmall />
      <RowPoster url={tamil} title='Tamil Movies' isSmall />
      <RowPoster url={hindi} title='Hindi Movies' isSmall />
      <RowPoster url={kannada} title='Kannada Movies' isSmall />
      <Footer/>
    </div>
  );
}

export default App;
