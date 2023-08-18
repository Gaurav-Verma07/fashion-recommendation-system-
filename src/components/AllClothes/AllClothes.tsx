/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import DataContext from "../../context/dataContext";
import { Image, Skeleton } from "@mantine/core";
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
              mt={30}
              sx={{ borderRadius: "30px", overflow: "hidden" }}
              visible={isLoading}
              width={"auto"}
            >
              <Image
                mt={30}
                width={300}
                height={500}
                src={cloth.imageUrl}
                className={classes.image}
                sx={{
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
