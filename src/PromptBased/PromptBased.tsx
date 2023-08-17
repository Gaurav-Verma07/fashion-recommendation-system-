/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from "react";
import DataContext from "../context/dataContext";
import classes from "./promptBased.module.css";

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
      <div className={classes.container}>
        <div className={classes.prompt}>
          <div className={classes.promptHeading}>
            <h3>Describe your fashion</h3>
            <h4>
              What do you want to wear, you can use a single word or complete
              sentence
            </h4>
          </div>
          <textarea
            className={classes.textBox}
            placeholder="Write spme prompt for Suggestions ..."
            onChange={(e: any) => {
              setPrompt(e.target.value);
            }}
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <button
            className={classes.searchButton}
            type="button"
            onClick={handleSearch}
          >
            Generate
          </button>
        </div>
        <div className={classes.generatedImage}>
          <div className={classes.promptHeading}>
            <h3>Your Desired GenAI Image</h3>
          </div>
          <div className={classes.genAiImage}></div>
        </div>
      </div>
    </section>
  );
};
export default PromptBased;
