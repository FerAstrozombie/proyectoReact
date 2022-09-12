import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='productos' element={<ItemListContainer greeting={"Bienvenidos a nuestra tienda"} />}/>          
          <Route path='detalles/:id' element={<ItemDetailContainer /> } />
          <Route path='category/:categoryName' element={<ItemListContainer /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
