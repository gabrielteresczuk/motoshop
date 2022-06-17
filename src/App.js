
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomCartContext from './assets/CartContext';

import Cart from './components/Cart';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';

function App() {

  return (
    <div className='App'>
        <BrowserRouter>
        <CustomCartContext>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<Home/>}  />
            <Route exact path='/motoshop' element={<Home/>}  />
            <Route exact path='/Item/:ItemId' element={<ItemDetailContainer/>}/>
            <Route exact path='/Lista' element={<ItemListContainer/>}/>
            <Route exact path='/Contacto' element={<Contacto/>}/>
            <Route exact path='/Cart' element={<Cart/>}/>
            <Route path='*' element={<NoMatch/>}/>
          </Routes>
        </CustomCartContext>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
