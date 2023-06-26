
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Galerie from "./pages/Galerie"

import ONas from "./pages/ONas"
import Nabidka from "./pages/Nabidka"

import Kontakt from "./pages/Kontakt"
import Layoud from "./pages/Layoutd"
import Home from './pages/Home';
import NabidkaOne from './components/NabidkaOne';

function App() {
  return  <BrowserRouter>
  <Routes>

    {/* Layout pro všechny stránky */}
    <Route path='/' element={<Layoud/>}>
      {/* Jednotlivé stránky */}
        <Route index element={<Home/>}/>
        <Route path="/nabidka" element={<Nabidka/>}/>
        <Route path="/polozky/:nabidkaId" element={<NabidkaOne/>}/>
        <Route path="/onas" element={<ONas/>}/>
        <Route path="/galerie" element={<Galerie/>}/>
        <Route path="/kontakt" element={<Kontakt/>}/>
    

    </Route>

  </Routes>
</BrowserRouter>

}

export default App;
