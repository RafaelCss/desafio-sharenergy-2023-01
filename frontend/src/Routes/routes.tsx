// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Home from "../Pages/Home";
import NaoExiste from "../Pages/NaoExiste";
import RotasPrivadas from "./rotaPrivada";


function Rotas (){
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<NaoExiste/>}/>
      <Route  element={<RotasPrivadas/>}>
        <Route path="/clientes" element={<h1>Não</h1>}/>
      </Route>
   </Routes>
  </BrowserRouter>
  )
}


export default Rotas;