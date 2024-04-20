import { Link} from "react-router-dom";
import logo from "../images/logo.png"

const Header = () => {

    return (
        <div className="header-container">  
        <Link to="/home">
          <img src={logo} alt="logo" className="logo-header" />
        </Link>
          <Link to="/home">Accueil</Link>
          <Link to="#">À propos</Link>
          <Link to="/genres">Nous contacter</Link>
          <Link to="/categories">Mon compte</Link>
        </div>
    )

}

export default Header;