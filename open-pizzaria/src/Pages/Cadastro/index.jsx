import { useState } from "react";
import "./Cadastro.css";
export default function Cadastro() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  return (
    <main className="containerCadastro">
      <h1>Cadastro de usuários</h1>
      <form>
        <article className="form-control">
          <label htmlFor="nome">Nome</label>
          <input 
            type="text" 
            name="nome"
            placeholder="Digite seu nome"
            value={formData.nome}
            />
        </article>

        <article className="form-control">
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            name="email"
            placeholder="Digite seu email" 
            value={formData.email}
            />
        </article>

        <article className="form-control">
          <label htmlFor="telefone">Telefone</label>
          <input 
            type="tel" 
            name="telefone" 
            placeholder="Digite seu telefone"
            value={formData.telefone}
            />
        </article>
        <br />
        <button>Cadastrar</button>
      </form>
    </main>
  );
}
