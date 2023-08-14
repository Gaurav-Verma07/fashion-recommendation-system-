import { useState } from "react";
import AllClothes from "./AllClothes/AllClothes";
import "./App.css";
import ChoiceBased from "./ChoiceBased/ChoiceBased";
import PromptBased from "./PromptBased/PromptBased";
import DataContext from "./context/dataContext";

function App() {
  const [searchType, setSearchType] = useState("CHOICE");
  const [data, setData] = useState({
    result: {},
    isSearched: false,
    isPrompt: false,
  });

  return (
    <DataContext.Provider value={{data, setData}} >
      <div>
        <button
          type="button"
          onClick={() => {
            setSearchType("CHOICE");
          }}
        >
          Choose
        </button>
        <button
          type="button"
          onClick={() => {
            setSearchType("PROMPT");
          }}
        >
          Prompt
        </button>
      </div>
      {searchType === "CHOICE" && <ChoiceBased />}
      {searchType === "PROMPT" && <PromptBased />}
      <AllClothes />
    </DataContext.Provider>
  );
}

export default App;
