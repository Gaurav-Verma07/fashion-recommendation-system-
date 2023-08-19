/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction } from "react";

export interface AllDataProps {
  images: Array<any>;
  prompt: string;
}

export interface DataProps {
  data: {
    result: any;
    isSearched: boolean;
    isPrompt: boolean;
    searchPrompt: string;
  };
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<DataProps["isLoading"]>>;
  setData: Dispatch<SetStateAction<DataProps["data"]>>;
  imageRef: string;
  setImageRef: Dispatch<SetStateAction<DataProps["imageRef"]>>;
  allData: Array<AllDataProps>;
  setAllData: Dispatch<SetStateAction<DataProps["allData"]>>;
}

const DataContext = React.createContext<DataProps>({
  data: {
    result: [],
    isSearched: false,
    isPrompt: false,
    searchPrompt: "",
  },
  setData: () => {},
  isLoading: true,
  setIsLoading: () => {},
  imageRef: "",
  setImageRef: () => {},
  allData: [{ images: [], prompt: "" }],
  setAllData: () => {},
});

export default DataContext;
