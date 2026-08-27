import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Users.css";

export default function User() {
  // UseState do react para gerenciar estado dos usuarios
  const [usuarios, setUsuarios] = useState([]);

  // Hook useEffect para lidar com efeitos colaterias no componente 
  useEffect(() => {
    console.log("Oláaaaaaaaaaaaaa")
  }, [])

  return (
    <main className="containerUsers">
      <h1>Lista de usuários</h1>
      <Link to="/">Voltar para HOME</Link>
      <section className="contentUsers">
        <article>
          <strong>Nome: Kaio</strong>
          <strong>Telefone: 119729-68761</strong>
        </article>
      </section>
    </main>
  );
}
