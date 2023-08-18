/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import DataContext from "../../context/dataContext";
import { Image } from "@mantine/core";
import classes from "./AllClothes.module.css";

const color = ["red", "orange", "purple", "grey", "pink"];

const AllClothes = () => {
  const { data } = useContext(DataContext);
  console.log({ data });
  return (
    <section className={classes.section}>
      <div className={classes.body}>
        {data.result?.images.map((cloth: any) => {
          return (
            <Image
              mt={30}
              width={300}
              height={500}
              src={cloth.imageUrl}
              className={ classes.image}
              sx={{
                border: `1px solid ${color[Math.floor(Math.random() * 5)]}`,
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AllClothes;
