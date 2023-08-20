import { useState, useContext } from "react";
import { SegmentedControl } from "@mantine/core";
import ChoiceBased from "../../components/ChoiceBased/ChoiceBased";
import PromptBased from "../../components/PromptBased/PromptBased";
import AllClothes from "../../components/AllClothes/AllClothes";
import DataContext from "../../context/dataContext";
import Textbased from "../../components/TextBased/TextBased";
import { CHOICE } from "../../enums/choice";

const Choice = () => {
  const [searchType, setSearchType] = useState<string>(CHOICE.TAGS);
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
            { label: "Use tags", value: CHOICE.TAGS },
            { label: "Design a prompt", value: CHOICE.PROMPT },
            { label: "Chat with Us", value: CHOICE.CHAT },
          ]}
        />
      </div>
      {searchType === CHOICE.TAGS && <ChoiceBased />}
      {searchType === CHOICE.PROMPT && <PromptBased />}
      {searchType === CHOICE.CHAT && <Textbased />}
      {data.isSearched && searchType !== CHOICE.CHAT && <AllClothes />}
    </div>
  );
};

export default Choice;
