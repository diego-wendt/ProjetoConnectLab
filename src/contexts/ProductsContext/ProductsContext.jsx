import React, { useEffect, useState } from "react";

export const ProductsContext = React.createContext(null);

const PropProvider = ProductsContext.Provider;

// eslint-disable-next-line react/prop-types
export const ProdContextProvider = ({ children }) => {

const [item, setItem] = useState([])


  // useEffect(() => {
  // }, []);asd

  return <PropProvider value={"texto"}>{children}</PropProvider>;
};

export const useProdContext = () => {
  const context = React.useContext(ProductsContext);
  return context;
};
