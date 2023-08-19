import { Skeleton } from "@mantine/core";
import classes from "./AllClothes.module.css";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../context/dataContext";

interface Props {
  imageUrl: string;
  key?: number;
  imageRef: string;
}

const CustomImage = ({ imageUrl, imageRef }: Props) => {
  const [isSkeletonLoading, setIsSkeletonLoading] = useState(true);
  const { isLoading } = useContext(DataContext);

  useEffect(() => {
    if (isLoading) {
      setIsSkeletonLoading(true);
    }
  }, [isLoading]);

  return (
    <Skeleton
      sx={{ border: "1px dotted #717171" }}
      className={classes.image}
      visible={isSkeletonLoading || isLoading}
    >
      <a download="image.png" href={`data:image/png;base64,${imageRef}`}>
        <img
          src={imageUrl}
          style={{
            height: "inherit",
            width: "inherit",
          }}
          onLoad={() => {
            setIsSkeletonLoading(false);
          }}
        />
      </a>
    </Skeleton>
  );
};

export default CustomImage;
