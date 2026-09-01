import { useState } from "react";
import "./Cadastro.css";

export default function Cadastro() {
  // Guarda os valores digitados no formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  // Guarda as mensagens de erro
  const [errors, setErrors] = useState({});

  // Atualiza o formData quando o usuário digita
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Envia o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Objeto que vai guardar os erros
    const novosErros = {};

    // Verifica o nome
    if (!formData.nome) {
      novosErros.nome = "Digite seu nome";
    }

    // Verifica o email
    if (!formData.email) {
      novosErros.email = "Digite seu email";
    }

    // Verifica o telefone
    if (!formData.telefone) {
      novosErros.telefone = "Digite seu telefone";
    }

    // Salva os erros no estado
    setErrors(novosErros);

    // Se tiver algum erro, para aqui
    if (Object.keys(novosErros).length > 0) {
      return;
    }

    // Se não tiver erro, envia para o backend
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Usuário cadastrado!", data);

        // Limpa o formulário
        setFormData({
          nome: "",
          email: "",
          telefone: "",
        });

        // Limpa os erros
        setErrors({});
      });
  };

  return (
    <main className="containerCadastro">
      <h1>Cadastro de usuários</h1>

      <form onSubmit={handleSubmit}>
        <article className="form-control">
          <label htmlFor="nome">Nome</label>

          <input
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            value={formData.nome}
            onChange={handleChange}
          />

          {errors.nome && <p>{errors.nome}</p>}
        </article>

        <article className="form-control">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && <p>{errors.email}</p>}
        </article>

        <article className="form-control">
          <label htmlFor="telefone">Telefone</label>

          <input
            type="tel"
            name="telefone"
            placeholder="Digite seu telefone"
            value={formData.telefone}
            onChange={handleChange}
          />

          {errors.telefone && <p>{errors.telefone}</p>}
        </article>

        <br />

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}
