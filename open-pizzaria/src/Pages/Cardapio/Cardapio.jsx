import "./Cardapio.css";

export default function Cardapio() {
  return (
    <main className="page">

    

      <section className="hero">
        <div className="hero-content">
          <span className="badge">🔥 Feita na hora</span>

          <h2>
            A pizza que você
            <strong> merece.</strong>
          </h2>

          <p>
            Ingredientes selecionados, massa artesanal e muito sabor.
            Escolha sua favorita!
          </p>
        </div>

        <div className="hero-pizza">🍕</div>
      </section>

      <section className="menu">

        <div className="section-title">
          <div>
            <span>NOSSO CARDÁPIO</span>
            <h2>Pizzas</h2>
          </div>

          <p>Escolha seu sabor favorito</p>
        </div>

        <div className="pizza-grid">

          <article className="pizza-card">
            <div className="pizza-image">
              <img src="https://i.pinimg.com/736x/cc/d3/23/ccd323f23697707098fabfe06aa2aad6.jpg" alt="" />
            </div>

            <div className="pizza-content">
              <h3>Calabresa</h3>

              <p>
                Calabresa, cebola, muçarela e orégano
              </p>

              <div className="pizza-footer">
                <strong>R$ 39,90</strong>
                <button className="add-button">+</button>
              </div>
            </div>
          </article>

          <article className="pizza-card">
            <div className="pizza-image">
              <img src="https://i.pinimg.com/736x/d7/10/e0/d710e0df0e49008aa9efa1336c8e6026.jpg" alt="" />
            </div>

            <div className="pizza-content">
              <h3>Frango com Catupiry</h3>

              <p>
                Frango desfiado, catupiry, muçarela e orégano
              </p>

              <div className="pizza-footer">
                <strong>R$ 44,90</strong>
                <button className="add-button">+</button>
              </div>
            </div>
          </article>

          <article className="pizza-card">
            <div className="pizza-image">
              <img src="https://i.pinimg.com/1200x/03/c5/35/03c535a7932200daa7224140cb7dfbd8.jpg" alt="" />
            </div>

            <div className="pizza-content">
              <h3>Margherita</h3>

              <p>
                Molho de tomate, muçarela, tomate e manjericão
              </p>

              <div className="pizza-footer">
                <strong>R$ 42,90</strong>
                <button className="add-button">+</button>
              </div>
            </div>
          </article>

          <article className="pizza-card">
            <div className="pizza-image">
              <img src="https://i.pinimg.com/1200x/b4/c4/03/b4c403644f66f02fc2b6a54ca0146411.jpg" alt="" />
            </div>

            <div className="pizza-content">
              <h3>Portuguesa</h3>

              <p>
                Presunto, ovo, cebola, ervilha, milho e muçarela
              </p>

              <div className="pizza-footer">
                <strong>R$ 46,90</strong>
                <button className="add-button">+</button>
              </div>
            </div>
          </article>

          <article className="pizza-card">
            <div className="pizza-image">
              <img src="https://i.pinimg.com/736x/7b/cf/b6/7bcfb62de522fa909e856a0e79542f5b.jpg" alt="" />
            </div>

            <div className="pizza-content">
              <h3>4 Queijos</h3>

              <p>
                Muçarela, provolone, parmesão e catupiry
              </p>

              <div className="pizza-footer">
                <strong>R$ 49,90</strong>
                <button className="add-button">+</button>
              </div>
            </div>
          </article>

          <article className="pizza-card">
            <div className="pizza-image">
              <img src="https://i.pinimg.com/1200x/0a/f2/7c/0af27cad30485e32045c818e3e77e925.jpg" alt="" />
            </div>

            <div className="pizza-content">
              <h3>Pepperoni</h3>

              <p>
                Pepperoni, muçarela, molho especial e orégano
              </p>

              <div className="pizza-footer">
                <strong>R$ 47,90</strong>
                <button className="add-button">+</button>
              </div>
            </div>
          </article>

        </div>
      </section>

    </main>
  );
}
