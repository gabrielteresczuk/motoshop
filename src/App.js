
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CarritoContextContenedor from './context/CarritoContext';
import Carrito from './components/Carrito';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import ArticuloDetalleContenedor from './components/ArticuloDetalleContenedor';
import ArticuloListaContenedor from './components/ArticuloListaContenedor';
import NavBar from './components/NavBar';
import NoEncontrado from './components/NoEncontrado';
import CarritoValidar from './components/CarritoValidar';
import Favoritos from './components/Favoritos';
import MisCompras from './components/MisCompras';


function App() {

  return (
    <div className='App'>
        <BrowserRouter>
        <CarritoContextContenedor>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<Inicio/>}  />
            <Route exact path='/motoshop' element={<Inicio/>}  />
            <Route exact path='/Articulo/:ArticuloId' element={<ArticuloDetalleContenedor/>}/>
            <Route exact path='/Catalogo/:categoria' element={<ArticuloListaContenedor/>}/>
            <Route path='/Catalogo' element={<ArticuloListaContenedor/>}/>
            <Route exact path='/Contacto' element={<Contacto/>}/>
            <Route exact path='/Favoritos' element={<Favoritos/>}/>
            <Route exact path='/Carrito' element={<Carrito/>}/>
            <Route exact path='/Carrito/Validar' element={<CarritoValidar/>}/>
            <Route exact path='/MisCompras' element={<MisCompras/>}/>
            
            <Route path='*' element={<NoEncontrado/>}/>
          </Routes>
        </CarritoContextContenedor>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
