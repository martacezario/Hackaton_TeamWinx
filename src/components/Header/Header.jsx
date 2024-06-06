import React from "react";
import Logo from "../Header/logo.png"

function Header (){
    return(

        <header>
            <nav>
                <img src={Logo} alt="logotipo saúde" />
                <ul>

                    <li>Quem somos</li>
                    <li>Especialidades</li>
                    <li>Unidades</li>
                    <button type="submit">CADASTRE-SE</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header