import React, { useContext } from "react";
import { categoryName } from "../data/data";
import "../App.css";
import { NewContext } from "./Context";

const SubHeader = () => {
  const { setCategory, products } = useContext(NewContext);

  return (
    <div className='subheader__container'>
      {categoryName.map((item) => {
        return (
          <div
            className='single__subheader__container'
            key={item.id}
            onClick={() => {
              setCategory(products.filter((c) => c.category === item.name));
            }}>
            <img src={item.image} alt='category' />
            <span className='category__title'>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SubHeader;
