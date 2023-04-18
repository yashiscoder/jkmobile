import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Introducing our featured product, the JK Mobile! Our website is the ultimate solution for anyone looking to streamline their mobile experience and get the most out of their device. With a range of powerful features and an intuitive interface, the JK Mobile is designed to make your life easier and more productive.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Some  wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
