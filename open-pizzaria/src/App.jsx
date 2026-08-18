function App() {
  return (
    <>
      <header>
        <h1>🍕 Bem-vindo à OpenPizzaria!</h1>
        <p>
          As melhores pizzas, preparadas com carinho para deixar seu momento
          ainda mais saboroso.
        </p>
      </header>
      <hr />

      <section className="banner">
        <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&h=300"
    alt="Pizza deliciosa da OpenPizzaria"
          width="1000"
          height="300"
        />
      </section>
      <section className="Sobre-pizzaria">
        <article>
          <h1>🍕 Pizzas Artesanais</h1>
          <p>
            Na OpenPizzaria, preparamos nossas pizzas com ingredientes frescos,
            massa saborosa e muito carinho. Escolha seus sabores favoritos e
            aproveite uma pizza deliciosa!
          </p>
        </article>

        <article>
          <h1>🔥 Sabor que Chega Quentinho</h1>
          <p>
            Do forno direto para a sua mesa! Nosso objetivo é entregar uma pizza
            quentinha, crocante e cheia de sabor para você aproveitar cada
            pedaço.
          </p>
        </article>
      </section>
    </>
  );
}

export default App;
