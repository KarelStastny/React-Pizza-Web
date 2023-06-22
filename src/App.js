
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Galerie from "./pages/Galerie"

import ONas from "./pages/ONas"
import Kontakt from "./pages/Kontakt"
import Pobocky from "./pages/Pobocky"
import Layoud from "./pages/Layoutd"

function App() {
  return  <BrowserRouter>
  <Routes>

    {/* Layout pro všechny stránky */}
    <Route path='/' element={<Layoud/>}>
      {/* Jednotlivé stránky */}
        <Route path="/home" >Domů</Route>
        <Route path="/onas" element={<ONas/>}>O nás</Route>
        <Route path="/pobocky" element={<Pobocky/>}>Pobočky</Route>
        <Route path="/galerie" element={<Galerie/>}>Galerie</Route>
        <Route path="/kontakt" element={<Kontakt/>}>Kontakt</Route>
    

    </Route>

  </Routes>
</BrowserRouter>

}

export default App;
