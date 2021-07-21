import React from "react";
import SubHeader from "../SubHeader";
import "../../App.css";
import SingleProduct from "../SingleProduct";

const Home = () => {
  return (
    <>
      <SubHeader />
      <div className='products__container'>
        <SingleProduct />
      </div>
    </>
  );
};

export default Home;
