import React from "react";
import { Link } from "react-router-dom";

import './StyleNavPac.css';
import * as S from "./StyleNavPac.jsx";

import LogoAzul from "../../assets/logoazul.png";
import User from "../../assets/user.png";



function Navegar() {

  return (
    <>

      <S.SectionMenu>

        <img src={LogoAzul} alt="logotipo saúde" />

        <nav className="nav">
            <S.Ulnav_paciente>
                <Link to="/meusDados"><S.MenuOptions> Meus Dados </S.MenuOptions></Link>
                <Link to="/historico"><S.MenuOptions> Histórico </S.MenuOptions></Link>
                <Link to="/consultas"><S.MenuOptions> Consultas </S.MenuOptions></Link>
            </S.Ulnav_paciente>
        </nav>

        <S.SpanPerfil>
            <p className="preLine">
                Olá,
                Gabriela!
            </p>
          <S.Icon  src={User} alt="icon perfil" />
        </S.SpanPerfil>

      </S.SectionMenu>

    </>
  )
}

export default Navegar;