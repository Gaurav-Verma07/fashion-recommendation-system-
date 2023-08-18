import { Skeleton } from '@mantine/core';
import classes from './AllClothes.module.css';
import { useContext, useEffect, useState } from 'react';
import DataContext from '../../context/dataContext';

interface Props {
  imageUrl: string;
  key?: number;
}

const CustomImage = ({ imageUrl }: Props) => {
  const [isSkeletonLoading, setIsSkeletonLoading] = useState(true);
  const { isLoading } = useContext(DataContext);

  useEffect(() => {
    if (isLoading) {
      setIsSkeletonLoading(true);
    }
  }, [isLoading]);

  return (
    <Skeleton className={classes.image} visible={isSkeletonLoading}>
      <img
        src={imageUrl}
        className={classes.image}
        onLoad={() => {
          setIsSkeletonLoading(false);
        }}
      />
    </Skeleton>
  );
};

export default CustomImage;
