import React from "react";
import GojoSatoru from "./components/GojoSatoru";
import { Routes, Route } from "react-router-dom";
import HyperGot from "./components/HyperGlot";
import Discovery from "./components/Discovery";
import Newcharecter from "./components/NewCharecter/newcharecter";
import Comingsoon from "./components/ComingSoon/comingsoon";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Discovery/>}/>
        <Route path="/gojosatoru" element={<GojoSatoru />} />
        <Route path="/hyperglot" element={<HyperGot />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/newcharecter" element={<Newcharecter />} />
        <Route path="/comingsoon" element={<Comingsoon/>}/>
        </Routes>
    </div>
  );
}

export default App;
