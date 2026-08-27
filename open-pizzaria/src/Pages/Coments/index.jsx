import { useEffect, useState } from "react";
import "./Coments.css"

export default function Coments() {

const [comments, setComments] = useState ([]);

useEffect(() => {
    fetch("http://localhost:3000/comments")
    .then((response) => response.json())
    .then((data) => setComments(data))
    .catch((error) => console.error("Erro na API", error))
  }, [])
  
  console.log(comments)

  return (
   <main className="containerComments">
      <h1>Lista de usuários</h1>
      
      <section className="contentCommentes">
        {comments.map((coments) => (
        <article >
            <h2>Nome: {coments.nome}</h2>
          <strong>Coméntario: {coments.text}</strong>
          {/* <strong>Telefone: {coments.telefone}</strong>
          <strong>Email: {coments.email}</strong> */}
        </article>
         ))}
        </section>
        </main>
  )
}
