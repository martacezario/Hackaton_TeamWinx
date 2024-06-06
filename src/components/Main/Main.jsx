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

       <S.ContainerSectionMain>
      <S.SectionMain>

        <S.H2>Nós acreditamos em um você mais saudável.</S.H2>
        <p>
        Na jornada da vida, cada fase tem suas próprias alegrias, desafios e necessidades de saúde, desde a pediatria, focando no crescimento saudável das crianças, até a maternidade, com suporte do pré-natal ao pós-parto, e o cuidado aos idosos, visando manter sua independência e qualidade de vida. Em todas as etapas, estamos comprometidos em oferecer cuidados de saúde compassivos e de alta qualidade para você e sua família.</p>

          
      </S.SectionMain>
      <S.DivGrid>
                <img src={fotosgrid} alt="" />


            </S.DivGrid>

            </S.ContainerSectionMain>
     












    </main>
  );
}

export default Main;
