import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

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
