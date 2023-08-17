import { useState } from "react";
import Header from "./Header/header";
import AllClothes from "./AllClothes/AllClothes";
import "./App.css";
import ChoiceBased from "./ChoiceBased/ChoiceBased";
import PromptBased from "./PromptBased/PromptBased";
import DataContext from "./context/dataContext";
import Footer from "./Footer/footer";

function App() {
  const [searchType, setSearchType] = useState("CHOICE");
  const [data, setData] = useState({
    result: {},
    isSearched: false,
    isPrompt: false,
  });

  return (
    <div>
      <Header />

      <DataContext.Provider value={{ data, setData }}>
        <div className="buttons">
          <button
            className="chooseButton"
            type="button"
            onClick={() => {
              setSearchType("CHOICE");
            }}
          >
            Choose
          </button>
          <button
            className="promptButton"
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
        {data.isSearched && <AllClothes />}
      </DataContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
