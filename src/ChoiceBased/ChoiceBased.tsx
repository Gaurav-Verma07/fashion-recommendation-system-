import { useState } from "react";

const colors = ["pink", "Red", "Blue", "Green", "Purple"];
const brands = ["H&M", "Gucci", "Louis Vuitton", "Prada", "Balenciaga"];
const type = ["Jeans", "Top", "Jewellary", "Shoes", "Goggles"];

interface Choice {
  color: string;
  brand: string;
  type: string;
}

const ChoiceBased = () => {
  const [data, setData] = useState({
    color: "pink",
    brand: "H&M",
    type: "Jeans",
  });

  const handleSearch = () => {
    console.log({ data });
  };

  return (
    <section>
      <label>Color</label>
      <select
        onChange={(e: any) => {
          setData((prev: Choice) => ({ ...prev, color: e.target.value }));
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
          setData((prev: Choice) => ({ ...prev, brand: e.target.value }));
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
          setData((prev: Choice) => ({ ...prev, type: e.target.value }));
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
