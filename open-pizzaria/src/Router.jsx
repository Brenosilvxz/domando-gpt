import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre/";
import Users from "./Pages/Users/";
import Cardapio from "./Pages/Cardapio/"


export default function Router() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </BrowserRouter>
  );
}
