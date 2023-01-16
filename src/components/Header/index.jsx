import { Link } from "react-router-dom";

import './header.css'

function Header() {
    return ( 
        <div>
            <header>
                <h2>
                    <Link to={'/'}>Logo</Link>
                </h2>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/terror'}>Terror</Link>
                    </li>
                    <li>
                        <Link to={'/adiciona'}>Adicionar Filme</Link>
                    </li>
                </ul>
            </header>
        </div>
     );
}

export default Header;