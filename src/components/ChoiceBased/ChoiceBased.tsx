/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState, useEffect } from "react";
import classes from "./choiceBased.module.css";
import { Select, Button } from "@mantine/core";
import { textToTextApi } from "../../utils/textToTextApi";
import { textToImageApi } from "../../utils/textToImageAPi";
import { ChainValues } from "langchain/schema";
import DataContext from "../../context/dataContext";

const colors = ["pink", "Red", "Blue", "Green", "Purple"];
const brands = ["H&M", "Gucci", "Louis Vuitton", "Prada", "Balenciaga"];
const type = ["Jeans", "Top", "Jewellary", "Shoes", "Goggles"];

interface Choice {
  color: string;
  brand: string;
  type: string;
}

const ChoiceBased = () => {
  const [searchData, setSearchData] = useState<Choice>({
    color: "pink",
    brand: "H&M",
    type: "Jeans",
  });
  const [isSearch, setIsSearch] = useState(false);
  const { setData } = useContext(DataContext);

  useEffect(() => {
    textToTextApi(
      `Get me a ${searchData.type} of ${searchData.color} brand of ${searchData.brand} brand.`
    ).then((res: ChainValues) => {
      textToImageApi(res?.text).then((response) => {
        setData({
          result: response,
          isSearched: true,
          isPrompt: false,
        });
      });
    });
  }, [isSearch]);

  return (
    <section>
      <div className={classes.main}>
        <div className={classes.selBox}>
          <Select
            className={classes.select}
            label="Select Color"
            onChange={(value: string) => {
              setSearchData((prev: Choice) => ({
                ...prev,
                color: value,
              }));
            }}
            value={searchData.color}
            data={colors}
          />
          <Select
            className={classes.select}
            label="Select Brand"
            onChange={(value: string) => {
              setSearchData((prev: Choice) => ({
                ...prev,
                brand: value,
              }));
            }}
            value={searchData.brand}
            data={brands}
          />
          <Select
            className={classes.select}
            label="Select cloth type"
            onChange={(value: string) => {
              setSearchData((prev: Choice) => ({
                ...prev,
                type: value,
              }));
            }}
            value={searchData.type}
            data={type}
          />
        </div>
        <Button
          p={10}
          sx={{ background: "linear-gradient(90deg,#04a0f4,#11b7da,#23d5b8)" }}
          mt={20}
          type="button"
          onClick={() => {
            setIsSearch(true);
          }}
        >
          Generate
        </Button>
      </div>
    </section>
  );
};

export default ChoiceBased;
