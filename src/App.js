import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import BuyerForm from './components/BuyerForm/BuyerForm';
import CartContextProvider from './context/CartContext';
import './App.css';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
        <div className="App">
            <NavBar/>
            <Routes>
              <Route
                exact 
                path="/" 
                element={ <ItemListContainer greeting='BIENVENIDO A OSIRIS SHOES '/>} 
              />
             <Route 
                exact
                path="/categoria/:idCategoria" 
                element={ <ItemListContainer greeting='BIENVENIDO A OSIRIS SHOES   '/>} 
              />
              <Route 
                exact
                path="/detalle/:idProd"
                element={<ItemDetailContainer />}
              />
              <Route 
                exact 
                path="/cart"
                element={<Cart />} 
              />
              <Route 
                exact
                path="/buyerForm"
                element={<BuyerForm/>}
                />

            </Routes>
            <Footer/>
        </div>
    </BrowserRouter>
   </CartContextProvider>
  );
}

export default App;
