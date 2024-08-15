import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../shared/Button";
const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black 90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end ">
            <div>
              <div className="mb-4">
                <p>Enjoy</p>
                <p>with</p>
                <p>Earphone</p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
              <img
                src={Image1}
                alt=""
                className="w-[320px] absolute bottom-0 "
              />
            </div>
          </div>
          {/* second col  */}

          {/* third col  */}
        </div>
      </div>
    </div>
  );
};

export default Category;
