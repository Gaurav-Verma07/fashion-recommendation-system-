/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import DataContext from "../../context/dataContext";
import classes from "./AllClothes.module.css";
import CustomImage from "./CustomImage";

const AllClothes = () => {
  const { data } = useContext(DataContext);

  const allImages = data.result?.images ?? Array(10);

  console.log(data.result);

  return (
    <section className={classes.section}>
      <div className={classes.body}>
        {allImages.map((cloth: any, index: number) => {
          return (
            <CustomImage key={index} imageUrl={cloth?.imageUrl as string} />
          );
        })}
      </div>
    </section>
  );
};

export default AllClothes;
