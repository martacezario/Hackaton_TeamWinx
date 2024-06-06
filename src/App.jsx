import React from "react";
import Header from "./components/Header/Header";
import {createGlobalStyle} from "styled-components";
import Main from "./components/Main/Main.jsx"


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
      
       
    }
`


function App (){
    return(

        <>
        <Header/>
        <Main/>
        <GlobalStyle/>
       
       
        
        </>
    )
}

export default App;