import { Route, Routes } from "react-router-dom";
import Footer from "./Frontend/Components/Footer";
import Navbar from "./Frontend/Components/Navbar";
import Home from "./Frontend/Pages/Home";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
