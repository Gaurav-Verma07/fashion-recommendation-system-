/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from "react";
import DataContext from "../context/dataContext";

const PromptBased = () => {
  const [prompt, setPrompt] = useState<string>("");
  const { setData } = useContext(DataContext);

  const handleSearch = async () => {
    const res = fetch(`/`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prompt),
    });
    setData({ result: res, isSearched: true, isPrompt: true });
  };

  return (
    <section>
      <div>
        <textarea
          onChange={(e: any) => {
            setPrompt(e.target.value);
          }}
          name=""
          id=""
          cols={30}
          rows={10}
        ></textarea>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </section>
  );
};

export default PromptBased;
