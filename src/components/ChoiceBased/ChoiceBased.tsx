/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState, useEffect } from "react";
import classes from "./choiceBased.module.css";
import { Select } from "@mantine/core";
import { textToImageApi } from "../../utils/textToImageAPi";
import DataContext from "../../context/dataContext";

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
  const [searchData, setSearchData] = useState<Choice>({
    color: "Pink",
    brand: "Versace",
    type: "Jeans",
    gender: "Female",
  });
  const { setData, setIsLoading } = useContext(DataContext);

  useEffect(() => {
    console.log(searchData);
    try {
      setIsLoading(true);
      textToImageApi(
        `Get me a ${searchData.type} of ${searchData.color} brand of ${searchData.brand} brand.`
      ).then((response) => {
        setData({
          result: response,
          isSearched: true,
          isPrompt: false,
        });
        setIsLoading(false);
      });
    } catch (err) {
      console.log({ err });
    }
  }, [searchData]);

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
          <Select
            className={classes.select}
            label="Your Gender"
            onChange={(value: string) => {
              setSearchData((prev: Choice) => ({
                ...prev,
                gender: value,
              }));
            }}
            value={searchData.gender}
            data={gender}
          />
        </div>
      </div>
    </section>
  );
};

export default ChoiceBased;
