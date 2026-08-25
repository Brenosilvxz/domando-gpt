import Header from "./Components/Header";

import Footer from "./Components/Footer";

import "./Global.css";
import Router from "./Router";


function App() {
  return (
    <div className="container">
      <Header
        tittleHeader="Bem-vindo à OpenPizzaria!"
        textHeader=" As melhores pizzas, preparadas com carinho para deixar seu momento ainda
        mais saboroso."
      />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
