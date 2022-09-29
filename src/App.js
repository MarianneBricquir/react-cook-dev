import './App.css';
import Recette from './pages/Recette';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Coktail from './pages/Cocktail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recette" element={<Recette />} />
          <Route path="/cocktail" element={<Coktail />} />
          <Route path="/about" element={<About />} />
          {/*path="*" fonctionne si jamais l'url ne correspond à rien de déclarer au dessus*/}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
