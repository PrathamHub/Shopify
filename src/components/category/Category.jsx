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
          <div className="py-3 sm:py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70  text-white rounded-3xl relative h-[320px]  flex items-end xs:h-[200px] sm:h-[320px] h-[200px] ">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] xs:text-[10px] text-gray-400">Enjoy</p>
                <p className="text-2xl xs:text-[10px] font-semibold mb-[2px]">
                  with
                </p>
                <p className="sm:text-4xl text-sm  xl:test-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
              <img
                src={Image1}
                alt=""
                className=" md:w-[320px] absolute bottom-0 "
              />
            </div>
          </div>

          {/* second col  */}
          <div className="py-3 sm:py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/70 text-white rounded-3xl relative h-[320px] xs:h-[200px] flex items-end sm:h-[320px] h-[200px] ">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="sm:text-2xl font-semibold mb-[2px]">with</p>
                <p className="sm:text-4xl text-sm  xl:test-5xl font-bold opacity-40 mb-2">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
              <img
                src={Image2}
                alt=""
                className="w-[320px] absolute bottom-0 top-10 right-[-20px]  lg:right-[-2rem] lg:top-[-10px]"
              />
            </div>
          </div>

          {/* third col  */}
          <div className="col-span-2  py-10 pl-5 bg-gradient-to-br from-primary to-primary/70 text-white rounded-3xl relative h-[320px] flex items-end ">
            <div className="">
              <div className="mb-4 ml-5">
                <p className=" text-gray-400">Enjoy</p>
                <p className="text-2xl  font-semibold ">with</p>
                <p className="text-4xl  xl:test-5xl font-bold opacity-40 mb-2">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
              <img
                src={Image3}
                alt=""
                className="w-[350px] absolute top-0 right-0 lg:left-[40%] lg:top-[-10px] sm:w-[350px] xs:w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
