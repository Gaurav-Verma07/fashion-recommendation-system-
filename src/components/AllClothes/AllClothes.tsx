/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import DataContext from "../../context/dataContext";
import classes from "./AllClothes.module.css";
import CustomImage from "./CustomImage";
import { Text } from "@mantine/core";

const AllClothes = () => {
  const { allData } = useContext(DataContext);

  return (
    <section className={classes.section}>
      {allData.map(
        (resultData, index: number) =>
          resultData.prompt !== "" && (
            <div key= {index} className={classes.results}>
              <Text pt={30} pb={30} pl={30} className={classes.prompt}>
                {" "}
                <b> Prompt:</b> {resultData.prompt}{" "}
              </Text>
              <div className={classes.body}>
                {resultData.images?.map((cloth: any, index: number) => {
                  return (
                    <CustomImage
                      key={index}
                      imageRef={cloth?.image}
                      imageUrl={cloth?.image_resource_url as string}
                    />
                  );
                })}
              </div>
            </div>
          )
      )}
    </section>
  );
};

export default AllClothes;
