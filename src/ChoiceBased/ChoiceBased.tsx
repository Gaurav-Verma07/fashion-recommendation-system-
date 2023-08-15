/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from "react";
import DataContext from "../context/dataContext";
import classes from "./choiceBased.module.css"

const colors = ["pink", "Red", "Blue", "Green", "Purple"];
const brands = ["H&M", "Gucci", "Louis Vuitton", "Prada", "Balenciaga"];
const type = ["Jeans", "Top", "Jewellary", "Shoes", "Goggles"];

interface Choice {
  color: string;
  brand: string;
  type: string;
}

const ChoiceBased = () => {
  const [data, setSearchData] = useState<Choice>({
    color: "pink",
    brand: "H&M",
    type: "Jeans",
  });

  const { setData } = useContext(DataContext);

  const handleSearch = async () => {
    const res = fetch(`/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        color: data.color,
        brand: data.brand,
        type: data.type,
      }),
    });
    setData({ result: res, isSearched: true, isPrompt: true });
  };

  return (
    <section>
      <label>Color</label>
      <select
        onChange={(e: any) => {
          setSearchData((prev: Choice) => ({ ...prev, color: e.target.value }));
        }}
      >
        {colors.map((value, index) => (
          <option key={value} value={value} selected={index === 0}>
            {value}
          </option>
        ))}
      </select>
      <label>Brand</label>
      <select
        onChange={(e: any) => {
          setSearchData((prev: Choice) => ({ ...prev, brand: e.target.value }));
        }}
      >
        {brands.map((value, index) => (
          <option value={value} key={value} selected={index === 0}>
            {value}
          </option>
        ))}
      </select>
      <label>Type</label>
      <select
        onChange={(e: any) => {
          setSearchData((prev: Choice) => ({ ...prev, type: e.target.value }));
        }}
      >
        {type.map((value, index) => (
          <option value={value} key={value} selected={index === 0}>
            {value}
          </option>
        ))}
      </select>

      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </section>
  );
};

export default ChoiceBased;
