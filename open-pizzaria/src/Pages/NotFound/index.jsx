import { Link } from "react-router-dom";
import "./404.css";

export default function index() {
  return (
    <div className="error-page">

      <div className="pizza-bg">
        🍕
      </div>

      <div className="pizza pizza1">🍕</div>
      <div className="pizza pizza2">🍕</div>
      <div className="pizza pizza3">🍕</div>

      <div className="error-content">

        <span className="error-tag">
          🍕 PEDIDO NÃO ENCONTRADO
        </span>

        <h1>404</h1>

        <h2>
          Essa pizza saiu do forno errado.
        </h2>

        <p>
          Parece que a página que você procura
          <br />
          não está no nosso cardápio.
        </p>

        <div className="error-buttons">

          {/* CARDÁPIO */}
          <Link to="/cardapio" className="menu-button">
            🍕 Voltar ao cardápio
          </Link>

          {/* VOLTAR */}
          <button
            className="back-button"
            onClick={() => window.history.back()}
          >
            ← Voltar
          </button>

        </div>

      </div>

      <div className="oven">
        <div className="oven-top"></div>
        <div className="oven-fire"></div>
      </div>

      <div className="circle"></div>

    </div>
  );
}
