import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre/";
import Users from "./Pages/Users/";
import Comments from "./Pages/Coments/";
import Cardapio from "./Pages/Cardapio/"
import NotFound from "./Pages/NotFound/"
import Cadastro from "./Pages/Cadastro";


export default function Router() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/users" element={<Users />} />
        <Route path="/coments" element={<Comments />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/cadastro" element={<Cadastro />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
