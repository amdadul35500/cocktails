import React from "react";
import {Navigate, Routes, Route} from "react-router-dom"
import Nabvar from "./components/Nabvar";
import Error from "./pages/Error";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <Nabvar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/cocktail/:id" element={<SingleCocktail/>} />
        <Route path="/error" element={<Error/>} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    
    </>
  );
}

export default App;
