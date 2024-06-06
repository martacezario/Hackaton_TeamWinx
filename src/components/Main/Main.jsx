import React from "react";
import * as S from "../Main/../Style.jsx";
import FotoHomem from "../../components/../assets/fotohomem.png";
import fotosgrid from "../../components/../assets/Grid.png"



function Main() {
  return (

    <main>
        <S.H1>Cuidar da saúde das pessoas para melhorar o mundo.</S.H1>

      <S.Div1>
        
          <S.ButtonAgOnline> Agendar consulta online</S.ButtonAgOnline>
          <S.ButtonAgPresencial> Agendar consulta presencial</S.ButtonAgPresencial>
       

        <img src={FotoHomem} alt="foto homem negro sorrindo de camisa branca" />
      </S.Div1>

      <S.SectionMain>

        <S.H2>Nós acreditamos em um você mais saudável.</S.H2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel urna dictum, finibus erat ut, pharetra massa. 
            Sed vel risus malesuada, hendrerit velit ut, cursus lectus.</p>

            <div>
                <img src={fotosgrid} alt="" />


            </div>
      </S.SectionMain>

     












    </main>
  );
}

export default Main;
