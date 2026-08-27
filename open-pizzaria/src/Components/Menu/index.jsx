import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/users">Usuários</Link>
        </li>

        <li className="submenu">
         <Link to="/cardapio">Cardápio</Link>
          <ul>
            <li>
              <a href="#">Calabresa</a>
            </li>

            <li>
              <a href="#">Mussarela</a>
            </li>

            <li>
              <a href="#">Frango com catupiry</a>
            </li>
            <li>
              <a href="#">Toscana</a>
            </li>
          </ul>
        </li>

        <li className="submenu">
          <a href="#">Mais ▾</a>

          <ul>
            <li>
              <a href="#">WhatsApp</a>
            </li>

            <li>
              <a href="#">Instagram</a>
            </li>

            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
