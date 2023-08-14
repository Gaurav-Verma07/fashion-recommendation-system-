import { useState } from "react";
import AllClothes from "./AllClothes/AllClothes";
import "./App.css";
import ChoiceBased from "./ChoiceBased/ChoiceBased";
import PromptBased from "./PromptBased/PromptBased";

function App() {
  const [searchType, setSearchType]= useState('CHOICE');

  return (
    <>
    <div className="buttons">
      <button className="chooseButton" type="button" onClick= {()=>{setSearchType('CHOICE')}} >Choose</button>
      <button className="promptButton" type="button" onClick= {()=>{setSearchType('PROMPT')}} >Prompt</button>
    </div>
      { searchType==='CHOICE' && <ChoiceBased />}
      { searchType==='PROMPT' && <PromptBased/>}
      <AllClothes/>
    </>
  );
}

export default App;
