import Header from "./Components/Header.jsx";
import Banner from "./Components/Banner.jsx";
import Cards from "./Components/Cards.jsx";
import Footer from "./Components/Footer.jsx";
import Menu from "./Components/Menu.jsx";

import "./Global.css";
function App() {
  return (
    <div className="container">
      <Header
        tittleHeader="Bem-vindo à OpenPizzaria!"
        textHeader=" As melhores pizzas, preparadas com carinho para deixar seu momento ainda
        mais saboroso."
      />

      <Menu />

      <Banner />

      <Cards />

      <Footer />
    </div>
  );
}

export default App;
