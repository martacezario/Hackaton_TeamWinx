import React from "react";
import Logo from "../Header/logo.png"
import * as S from "../Header/../Style.jsx"
import FotoHomem from "../../components/../assets/fotohomem.png"

function Header (){
    return(

        <S.Header>
            <S.Nav>
                <img src={Logo} alt="logotipo saúde" />
                <S.Ul>

                    <li>Quem somos</li>
                    <li>Especialidades</li>
                    <li>Unidades</li>
                    <S.buttonCad type="submit">CADASTRE-SE</S.buttonCad>
                </S.Ul>
            </S.Nav>

           

           
        </S.Header>
    )
}

export default Header