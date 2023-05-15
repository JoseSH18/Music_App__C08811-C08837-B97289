import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/home';
import BuscarArtista from './components/buscarArtista';
import DetalleArtista from './components/detalleArtista';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/buscar-artista' element={<BuscarArtista/>}/>
            <Route path='/detalleArtista/:id' element={<DetalleArtista/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
