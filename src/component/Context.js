import React, { createContext, useState } from "react";
import faker from "faker";
import { productsArray } from "../data/data";

export const NewContext = createContext();
faker.seed(100);

const Context = ({ children }) => {
  const [products] = useState(productsArray);
  const [cart, setCart] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(productsArray);
  const setCategory = (categories) => {
    setCategoryFilter(categories);
  };
  return (
    <NewContext.Provider
      value={{ products, cart, setCart, categoryFilter, setCategory }}>
      {children}
    </NewContext.Provider>
  );
};

export default Context;
