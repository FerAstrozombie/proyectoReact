import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import Inicio from './components/Inicio/Inicio';
import {CartProvider} from "./components/context/CartProvider"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='productos' element={<ItemListContainer greeting={"Bienvenidos a nuestra tienda"} />}/>          
            <Route path='detalles/:id' element={<ItemDetailContainer /> } />
            <Route path='category/:categoryName' element={<ItemListContainer /> } />
            <Route path='cart' element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
