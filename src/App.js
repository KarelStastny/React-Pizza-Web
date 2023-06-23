
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Galerie from "./pages/Galerie"

import ONas from "./pages/ONas"
import Kontakt from "./pages/Kontakt"
import Pobocky from "./pages/Pobocky"
import Layoud from "./pages/Layoutd"
import Home from './pages/Home';

function App() {
  return  <BrowserRouter>
  <Routes>

    {/* Layout pro všechny stránky */}
    <Route path='/' element={<Layoud/>}>
      {/* Jednotlivé stránky */}
        <Route index element={<Home/>}/>
        <Route path="onas" element={<ONas/>}/>
        <Route path="pobocky" element={<Pobocky/>}/>
        <Route path="galerie" element={<Galerie/>}/>
        <Route path="kontakt" element={<Kontakt/>}/>
    

    </Route>

  </Routes>
</BrowserRouter>

}

export default App;
