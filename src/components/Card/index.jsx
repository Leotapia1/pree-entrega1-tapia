import { Link } from "react-router-dom";
import './index.css'

const Card = ({ producto }) => {
  return (
    <Link to={`${producto.id}`}>
      <div className="container">
      <div className="card">
        <h3 className="titulo">{producto.title}</h3>
        <img
          src={producto.image}
          alt={producto.title}
          width="200"
          height="250"
        />
        <p>{producto.description}</p>
        <h4>$ {producto.price}</h4>
      </div>
      </div>
    </Link>
  );
};

export default Card;
