import React from "react";
import Heading from "../shared/Heading";
import ProductCard from "./ProductCard";
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";
const Products = () => {
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Boat Headphone",
      price: "120",
      aesDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Boat Headphone",
      price: "120",
      aesDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Boat Headphone",
      price: "120",
      aesDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Boat Headphone",
      price: "120",
      aesDelay: "0",
    },
  ];
  const ProductData2 = [
    {
      id: 5,
      img: Img5,
      title: "Boat Headphone",
      price: "120",
      aesDelay: "0",
    },
    {
      id: 6,
      img: Img6,
      title: "Boat Headphone",
      price: "120",
      aesDelay: "0",
    },
    {
      id: 7,
      img: Img7,
      title: "Boat Headphone",
      price: "120",
      aesDelay: "0",
    },
    {
      id: 8,
      img: Img7,
      title: "Boat Headphone",
      price: "120",
      aesDelay: "0",
    },
  ];
  return (
    <div>
      <div className="container">
        {/* Header Section  */}
        <Heading title="Our Product" subTitle={"Explore Our Product"} />
        {/* Body Section  */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductData2} />
      </div>
    </div>
  );
};

export default Products;
