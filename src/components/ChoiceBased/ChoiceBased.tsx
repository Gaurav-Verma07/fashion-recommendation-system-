/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import classes from "./choiceBased.module.css";
import { Button, Loader, Select } from "@mantine/core";
import DataContext from "../../context/dataContext";
// import { textToTextApi } from '../../utils/textToTextApi';
import { edenAIApi } from "../../utils/edenAIApi";

const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Pink",
  "Purple",
  "Orange",
  "Black",
  "White",
  "Gray",
  "Brown",
  "Teal",
  "Lavender",
  "Gold",
  "Silver",
  "Indigo",
  "Magenta",
  "Turquoise",
  "Coral",
  "Olive",
];
const brands = [
  "Gucci",
  "Louis Vuitton",
  "Chanel",
  "Hermès",
  "Prada",
  "Dior",
  "Burberry",
  "Versace",
  "Ralph Lauren",
  "Balenciaga",
  "Fendi",
  "Givenchy",
  "Alexander McQueen",
  "Yves Saint Laurent (YSL)",
  "Valentino",
  "Calvin Klein",
  "Tommy Hilfiger",
  "Marc Jacobs",
  "Michael Kors",
  "Coach",
];
const type = ["Jeans", "Top", "Jewellary", "Shoes", "Goggles"];
const gender = ["Male", "Female"];

interface Choice {
  color: string;
  brand: string;
  type: string;
  gender: string;
}

const ChoiceBased = () => {
  const [tagData, setTagData] = useState({
    colors,
    brands,
    type,
    gender,
  });
  const [searchData, setSearchData] = useState<Choice>({
    color: "Pink",
    brand: "Versace",
    type: "Jeans",
    gender: "Female",
  });
  const { setData, setIsLoading, isLoading, setAllData } = useContext(
    DataContext
  );

  const searchHandler = () => {
    try {
      setIsLoading(true);
      edenAIApi(
        `Get me a ${searchData.type} of ${searchData.color} brand of ${searchData.brand} brand for a ${searchData.gender}`
      ).then((res) => {
        console.log({ res });
        setData({
          result: res?.openai?.items,
          isSearched: true,
          isPrompt: false,
          searchPrompt: `${searchData.color} ${searchData.brand} ${searchData.type} ${searchData.gender}`,
        });
        setAllData((prev) => [
          ...prev,
          {
            images: res?.openai?.items,
            prompt: `${searchData.type}, ${searchData.color}, ${searchData.brand}, ${searchData.gender}`,
          },
        ]);
        setIsLoading(false);
      });
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <section>
      <div className={classes.main}>
        <div className={classes.selBox}>
          <Select
            searchable
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => {
              setTagData((current) => ({
                ...current,
                colors: [...current.colors, query],
              }));
              return query;
            }}
            className={classes.select}
            label="Select Color"
            onChange={(value: string) => {
              setSearchData((prev: Choice) => ({
                ...prev,
                color: value,
              }));
            }}
            value={searchData.color}
            data={tagData.colors}
          />
          <Select
            searchable
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => {
              setTagData((current) => ({
                ...current,
                brands: [...current.brands, query],
              }));
              return query;
            }}
            className={classes.select}
            label="Select Brand"
            onChange={(value: string) => {
              setSearchData((prev: Choice) => ({
                ...prev,
                brand: value,
              }));
            }}
            value={searchData.brand}
            data={tagData.brands}
          />
          <Select
            searchable
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => {
              setTagData((current) => ({
                ...current,
                type: [...current.type, query],
              }));
              return query;
            }}
            className={classes.select}
            label="Select cloth type"
            onChange={(value: string) => {
              setSearchData((prev: Choice) => ({
                ...prev,
                type: value,
              }));
            }}
            value={searchData.type}
            data={tagData.type}
          />
          <Select
            searchable
            creatable
            getCreateLabel={(query) => `+ Create ${query}`}
            onCreate={(query) => {
              setTagData((current) => ({
                ...current,
                gender: [...current.gender, query],
              }));
              return query;
            }}
            className={classes.select}
            label="Your Gender"
            onChange={(value: string) => {
              setSearchData((prev: Choice) => ({
                ...prev,
                gender: value,
              }));
            }}
            value={searchData.gender}
            data={tagData.gender}
          />
        </div>
        <Button color="grape" onClick={searchHandler} mt={40}>
          {isLoading ? <Loader color="white" variant="dots" /> : "Generate"}
        </Button>
      </div>
    </section>
  );
};

export default ChoiceBased;
