import Cartwidget from './Cartwidget';
import './index.css';

const Navbar = () => {
  return (
    <div className="container_nav">
      <h1>L.T Tecno</h1>
      <nav>
        <a href="">Inicio</a>
        <a href="">Productos</a>
        <a href="">Contacto</a>
      </nav>
      <Cartwidget icono="src\components\NavBar\Cartwidget\image.png"/>
    </div>
  )
}

export default Navbar