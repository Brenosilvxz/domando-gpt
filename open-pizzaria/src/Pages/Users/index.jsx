import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Users.css";

export default function User() {
  // UseState do react para gerenciar estado dos usuarios
  const [usuarios, setUsuarios] = useState([]);

  // Hook useEffect para lidar com efeitos colaterias no componente 
  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => setUsuarios(data))
    .catch((error) => console.error("Erro na API", error))
  }, [])

  console.log(usuarios)

  return (
    <main className="containerUsers">
      <h1>Lista de usuários</h1>
      <Link to="/">Voltar para HOME</Link>
      
      <section className="contentUsers">
        {usuarios.map((user) => (
        <article key={user.id}>
          <strong>Nome: {user.nome}</strong>
          <strong>Telefone: {user.telefone}</strong>
          <strong>Email: {user.email}</strong>
        </article>
      ))}
        
      </section>
    </main>
  );
}
