import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Page from "./components/Page/Page";
import ItemListContainer from "./components/Page/ItemListContainer/ItemListConatiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Page>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </Page>
      </BrowserRouter>
    </>
  );
}

export default App;
