
import './App.css';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
//import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className='App'>
      <NavBar/>
      {/*<ItemListContainer/>*/}
      <ItemDetailContainer/>
      <Footer/>
    </div>
  );
}

export default App;
