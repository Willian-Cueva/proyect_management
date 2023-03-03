import Header from "./components/Header";
import { Routes, Route, HashRouter } from "react-router-dom";


import Guia from "./pages/Guia";
import CasoPractico from "./pages/CasoPractico";

function App() {
  return (
    <HashRouter>
      <Header />
    <Routes>
      <Route exact path="/" element={<Guia/>}/>
      <Route path="/caso-practico" element={<CasoPractico/>}/>
    </Routes>
      
    </HashRouter>
  );
}

export default App;
