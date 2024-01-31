import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Page } from "./components/Page/Page";
import { ItemListContainer } from "./components/Page/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/Page/ItemDetailContainer/ItemDetailContainer";
import { CartContainer } from "./components/Page/CartContainer/CartContainer";
import { CartProvider } from "./context/CartContext";
import { Page404 } from "./components/Page/Page404/Page404";
import { Checkout } from "./components/Page/Checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Page>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/id/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Page>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
