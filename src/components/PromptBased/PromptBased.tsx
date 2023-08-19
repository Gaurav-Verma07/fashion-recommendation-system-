/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from "react";
import DataContext from "../../context/dataContext";
import classes from "./promptBased.module.css";
import { Title, Textarea, Button  } from "@mantine/core";
import { edenAIApi } from "../../utils/edenAIApi";

const PromptBased = () => {
  const [prompt, setPrompt] = useState<string>("");
  const { setData, setIsLoading } = useContext(DataContext);

  const handleSearch = () => {
    try {
      setIsLoading(true);
      edenAIApi(prompt).then((res) => {
        console.log({ res });
        setData({
          result: res?.openai?.items,
          isSearched: true,
          isPrompt: false,
        });
        setIsLoading(false);
      });
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.prompt}>
          <div className={classes.promptHeading}>
            <Title order={2} mb={6}>
              Describe your fashion
            </Title>
          </div>
          <Textarea
            placeholder="A floral frock with natural colors..."
            description="What do you want to wear, you can use a single word or complete sentence"
            withAsterisk
            autosize
            minRows={6}
            onChange={(e: any) => {
              setPrompt(e.target.value);
            }}
          />
          <div className={classes.searchButton}>
            <Button
              disabled={prompt.length === 0}
              sx={{
                width: "50%",
                background: "linear-gradient(90deg,#04a0f4,#11b7da,#23d5b8)",
              }}
              onClick={handleSearch}
            >
              Generate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PromptBased;
