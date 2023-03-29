import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";


const Navbar = () => {
  const activeStyle = {
    color: "#00fca8",
  };

  return (
    <nav className={styles.container}>
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <img src="src\components\Navbar\lttecno.png" alt="logo" width="100"/>
      </NavLink>
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Inicio</p>
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Productos</p>
      </NavLink>
      <NavLink
        to="/cart"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <img src="src\components\Navbar\image.png" alt="carrito" width="40" />
      </NavLink>
    </nav>
  );
};

export default Navbar;
