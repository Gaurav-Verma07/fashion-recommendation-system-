/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import DataContext from "../../context/dataContext";
import { Skeleton } from "@mantine/core";
import classes from "./AllClothes.module.css";

const color = ["red", "orange", "purple", "grey", "pink"];

const AllClothes = () => {
  const { data, isLoading } = useContext(DataContext);
  console.log({ data });

  const allImages = data.result?.images ?? Array(10);

  return (
    <section className={classes.section}>
      <div className={classes.body}>
        {allImages.map((cloth: any) => {
          return (
            <Skeleton
              className={classes.image}
              visible={isLoading}
              width={"auto"}
            >
              <img
                width={300}
                height={500}
                src={cloth.imageUrl}
                className={classes.image}
                style={{
                  border: `1px solid ${color[Math.floor(Math.random() * 5)]}`,
                }}
              />
            </Skeleton>
          );
        })}
      </div>
    </section>
  );
};

export default AllClothes;
