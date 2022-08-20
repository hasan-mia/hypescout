import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Frontend/Components/Footer";
import Navbar from "./Frontend/Components/Navbar";
import Home from "./Frontend/Pages/Home";
import useUsers from "./Hooks/useUsers";

// =======Create Contex=====
export const userContext = createContext(null)

function App() {
  // =======Get Usrs Data======
  const {users, isLoad} = useUsers();
  const [searchText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState();
  
  // ==========Set Theme=======
  const [theme, setTheme] = useState("dark");

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
    <userContext.Provider value={{users, isLoad, searchResult, searchHandler, theme, setTheme}}>
      <div id={theme}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
        </Routes>
        <Footer></Footer>
      </div>
    </userContext.Provider>
    
  );
}

export default App;
