import React from "react";
import Button from "../shared/Button";
const ProductCard = ({ data }) => {
  return (
    <div className="mb-10 ">
      <div className="grid grid-cols-1  xs:grid-cols-2 md:grid-cols-4 gap-2 place-items-center">
        {/* Card Section  */}
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group"
            key={data.id}
          >
            <div className="relative space-y-3">
              <img
                src={data.img}
                alt=""
                className="h-[180px] w-[260px] object-cover ronded-md"
              />
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 h-full duration-200 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm justify-center items-center">
                <Button
                  text="Add to Cart"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
