import { Link } from "react-router-dom";
import './style.css';

export default function Topo () {
    return (
        <header>
        <div className="limita-secao itens-topo">
            <img src="./assets/logo.png" alt="logo-gelateria" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Sabores">Sabores</Link>
                <Link to="/Sobre">Sobre</Link>
            </nav>
        </div>
    </header>
    );
}