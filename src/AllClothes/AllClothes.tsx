/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import DataContext from "../context/dataContext";

const AllClothes = () => {
  const { data } = useContext(DataContext);
  return (
    <section>
      {[""].map((cloth: any) => {
        return <img src={cloth} />;
      })}
    </section>
  );
};

export default AllClothes;
