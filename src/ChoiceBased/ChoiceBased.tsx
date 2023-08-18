/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import classes from "./choiceBased.module.css";
import { Select, Button } from "@mantine/core";
import { textToTextApi } from "../utils/textToTextApi";

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

  const handleSearch = async () => {
    textToTextApi(
      `Get me a ${searchData.type} of ${searchData.color} brand of ${searchData.brand} brand.`
    );
  };

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
          onClick={handleSearch}
        >
          Generate
        </Button>
      </div>
    </section>
  );
};

export default ChoiceBased;
