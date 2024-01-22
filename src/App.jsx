import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Page from "./components/Page/Page";
import ItemListContainer from "./components/Page/ItemListContainer/ItemListConatiner";
import ItemDetailContainer from "./components/Page/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Page>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/id/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Page>
      </BrowserRouter>
    </>
  );
}

export default App;
