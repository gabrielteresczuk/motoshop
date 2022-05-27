import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
