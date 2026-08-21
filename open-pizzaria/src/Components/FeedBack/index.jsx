import "./FeedBack.css"

import estrela from "../../assets/estrela.png";


const FeedBack = () => {
  return (
    <section className="feedBack">
      <article className="contentBack">
        <img
          src="https://fastly.picsum.photos/id/804/80/80.jpg?hmac=RMdFQs-Toh0R-4bJhc1U-mBMitehq4T_d6sDWVNh8PI"
          alt=""
        />
        <h1>lorem ipsum</h1>
        <img src={estrela} width="30" height="30" alt="" />
        <strong>5.0</strong>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          voluptatibus nesciunt, eaque, deleniti pariatur sed totam laborum
          libero et dicta rerum ea, quis fuga officia dolores nemo architecto
          molestias temporibus.
        </p>
      </article>
    </section>
  );
};

export default FeedBack;
