import {styled} from "styled-components";

const SectionMenu = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100vw;
    height: 25vh;
    border: 2px solid blue;  
`;

const Icon = styled.img`
  height: 8vh;
`


const Ulnav_paciente = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  list-style: none;
  color: #02026B;

  font-family: 'Roboto', sans-serif;
  font-size: 1.3em;

`;

const MenuOptions = styled.li`
    border-bottom: 2px solid ${({ ativo }) => (ativo ? "#000000" : "#ffffff")};
`;

const SpanPerfil = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5vw;
`;

export {SectionMenu, Icon, Ulnav_paciente, SpanPerfil, MenuOptions};