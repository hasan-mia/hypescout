import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Frontend/Components/Footer";
import Navbar from "./Frontend/Components/Navbar";
import Home from "./Frontend/Pages/Home";
import useUsers from "./Hooks/useUsers";

// =======Create Contex=====
export const userContext = createContext()

function App() {
  // =======Get Usrs Data======
  const {users, isLoad} = useUsers();
  const [searchText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState();

  // =========Search handler========
  const searchHandler = (e) =>{
      setSearchText(e.target.value);
  }
      useEffect(() => {
      fetch('data/user.json')
          .then(res => res.json())
          .then(data => {
              const findProduct = data.filter(product => (product.name).toLowerCase().includes(searchText))
              setSearchResult(findProduct);
          })
  }, [searchText]);

  return (
    <userContext.Provider value={{users, isLoad, searchResult, searchHandler}}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
      </Routes>
      <Footer></Footer>
    </userContext.Provider>
  );
}

export default App;
