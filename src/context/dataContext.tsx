/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction } from "react";

export interface DataProps {
  data: {
    result: any;
    isSearched: boolean;
    isPrompt: boolean;
  };
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<DataProps["isLoading"]>>;
  setData: Dispatch<SetStateAction<DataProps["data"]>>;
  imageRef: string;
  setImageRef: Dispatch<SetStateAction<DataProps["imageRef"]>>;
}

const DataContext = React.createContext<DataProps>({
  data: { result: [], isSearched: false, isPrompt: false },
  setData: () => {},
  isLoading: true,
  setIsLoading: () => {},
  imageRef: "",
  setImageRef: () => {},
});

export default DataContext;
