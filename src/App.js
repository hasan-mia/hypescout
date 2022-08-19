import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Frontend/Components/Footer";
import Navbar from "./Frontend/Components/Navbar";
import Home from "./Frontend/Pages/Home";
import useUsers from "./Hooks/useUsers";

// =======Create Contex=====
export const userContext = createContext()

function App() {
  // =======Get Usrs Data======
  const {users} = useUsers();
  return (
    <userContext.Provider value={{users}}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
      </Routes>
      <Footer></Footer>
    </userContext.Provider>
  );
}

export default App;
