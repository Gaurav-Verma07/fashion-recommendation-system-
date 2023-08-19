import { useState, useContext } from "react";
import { SegmentedControl } from "@mantine/core";
import ChoiceBased from "../../components/ChoiceBased/ChoiceBased";
import PromptBased from "../../components/PromptBased/PromptBased";
import AllClothes from "../../components/AllClothes/AllClothes";
import DataContext from "../../context/dataContext";

const Choice = () => {
  const [searchType, setSearchType] = useState("CHOICE");
  const { data, setData } = useContext(DataContext);

  return (
    <div>
      <div className="segmentControl">
        <SegmentedControl
          size="lg"
          radius="lg"
          color="blue"
          onChange={(value: string) => {
            setData((prev) => ({
              ...prev,
              isPrompt: false,
            }));
            setSearchType(value);
          }}
          data={[
            { label: "Choice based", value: "CHOICE" },
            { label: "Prompt based", value: "PROMPT" },
          ]}
        />
      </div>
      {searchType === "CHOICE" && <ChoiceBased />}
      {searchType === "PROMPT" && <PromptBased />}
      {data.isSearched && <AllClothes />}
    </div>
  );
};

export default Choice;
