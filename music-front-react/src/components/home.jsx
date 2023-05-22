import './home_styles.css';

import React, { useState } from 'react';


import SearchArtist from './buscarArtista'
import LayoutFooter from './footer';
import LayoutHeader from './header';
import HomeSections from './homeSections'
import DetalleArtista from './detalleArtista'




const Home = () => {
  const [showHome, setShowHome] = useState(true);
  const [showSearch, setshowSearch] = useState(false);


  const handleShowHome = () => {
    setShowHome(true);
  };

  const handleCloseHome = () => {
    setShowHome(false);
  };
  const handleShowSearch = () => {
    setshowSearch(true);
  };

  const handleCloseSearch = () => {
    setshowSearch(false);
  };

  const handleHeaderButtonSearch = () => {
    handleCloseHome();
    handleShowSearch();
    setSelectedArtistaId(null);
  };
  const [selectedArtistaId, setSelectedArtistaId] = useState(null);

  const handleArtistaClick = (artistaId) => {
    setSelectedArtistaId(artistaId);
  };
  const goHome = () => {
    handleCloseSearch();
    setSelectedArtistaId(null);
    handleShowHome();
  };

  
  
 
  return (
    <div className='body'>
        
      <LayoutHeader onHeaderButtonSearch={{handleHeaderButtonSearch, goHome}}/>
      {showSearch && <SearchArtist onSelectArtistaId={{handleArtistaClick, handleCloseSearch, handleShowHome}}/>}
    
      {showHome && <HomeSections />}
      {selectedArtistaId && <DetalleArtista artistaId={{selectedArtistaId, handleShowSearch, handleArtistaClick}} />}
      <LayoutFooter />
    </div>
  )
}

export default Home