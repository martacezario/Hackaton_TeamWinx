import React from "react";
import Familia from "../../assets/imglogin.png"
import LogoAzul from "../../assets/logoazul.png"
import Button from "../gerais/button";

import * as S from "../Style.jsx";



export default function Cadastro(){
    return(
        <>
            <main> 
                <figure>
                <img src={LogoAzul} alt="Logo" />
                </figure>
                <div>
                <h2>Qual seu CPF/RNE </h2>
                <p>Para sua segurança guardaremos suas informações através do seu CPF. 
                Caso seja estrangeiro, utilizaremos o seu RNE.
                </p>
                <input type="text" name="nome" value="" placeholder="Digite seu CPF/RNE" />
                <button>PRÓXIMO</button>
                </div>
                <figure>
                    <img src={Familia} alt="Familia"/>
                </figure>
            </main>
            <Button path={"/meusDados"} text="Entrar" />

        </>
    );
}


