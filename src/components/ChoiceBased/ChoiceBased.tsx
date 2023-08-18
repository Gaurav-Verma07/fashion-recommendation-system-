/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState, useEffect } from 'react';
import classes from './choiceBased.module.css';
import { Button, Select } from '@mantine/core';
import DataContext from '../../context/dataContext';
// import { textToTextApi } from '../../utils/textToTextApi';
import { edenAIApi } from '../../utils/edenAIApi';

const colors = ['pink', 'Red', 'Blue', 'Green', 'Purple'];
const brands = ['H&M', 'Gucci', 'Louis Vuitton', 'Prada', 'Balenciaga'];
const type = ['Jeans', 'Top', 'Jewellary', 'Shoes', 'Goggles'];
const gender = ['Male', 'Female'];

interface Choice {
  color: string;
  brand: string;
  type: string;
  gender: string;
}

const ChoiceBased = () => {
  const [searchData, setSearchData] = useState<Choice>({
    color: 'pink',
    brand: 'H&M',
    type: 'Jeans',
    gender: 'Female',
  });
  const { setData, setIsLoading } = useContext(DataContext);

  useEffect(() => {
    searchHandler();
  }, []);

  const searchHandler = () => {
    try {
      setIsLoading(true);
      edenAIApi(
        `Get me a ${searchData.type} of ${searchData.color} brand of ${searchData.brand} brand for a ${searchData.gender}`,
      ).then((res) => {
        console.log({ res });
        setData({ result: res?.openai?.items, isSearched: true, isPrompt: false });
        setIsLoading(false);
      });
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <section>
      <div className={classes.main}>
        <div className={classes.selBox}>
          <Select
            className={classes.select}
            label="Select Color"
            onChange={(value: string) => {
              setSearchData((prev: Choice) => ({
                ...prev,
                color: value,
              }));
            }}
            value={searchData.color}
            data={colors}
          />
          <Select
            className={classes.select}
            label="Select Brand"
            onChange={(value: string) => {
              setSearchData((prev: Choice) => ({
                ...prev,
                brand: value,
              }));
            }}
            value={searchData.brand}
            data={brands}
          />
          <Select
            className={classes.select}
            label="Select cloth type"
            onChange={(value: string) => {
              setSearchData((prev: Choice) => ({
                ...prev,
                type: value,
              }));
            }}
            value={searchData.type}
            data={type}
          />
          <Select
            className={classes.select}
            label="Your Gender"
            onChange={(value: string) => {
              setSearchData((prev: Choice) => ({
                ...prev,
                gender: value,
              }));
            }}
            value={searchData.gender}
            data={gender}
          />
        </div>
        <Button color="grape" onClick={searchHandler} mt= {40} >
          Generate
        </Button>
      </div>
    </section>
  );
};

export default ChoiceBased;
