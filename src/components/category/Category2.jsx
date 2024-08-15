import React from "react";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../shared/Button";
const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col  */}
          <div className="col-span-2  py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end ">
            <div className="">
              <div className="mb-4 ml-5">
                <p className=" text-gray-400">Enjoy</p>
                <p className="text-2xl  font-semibold ">with</p>
                <p className="text-4xl  xl:test-5xl font-bold opacity-40 mb-2">
                  Laptop
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
                className="w-[350px] absolute top-0 right-0 lg:left-[40%] lg:top-[-10px] scale-90"
              />
            </div>
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-start ">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl xl:test-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
              <img
                src={Image2}
                alt=""
                className="w-[320px] absolute bottom-0 scale-90 "
              />
            </div>
          </div>

          {/* third col  */}
          <div className="py-10 pl-5 flex items-start bg-gradient-to-br from-brandBlue to-brandBlue/70 text-white rounded-3xl relative h-[320px] ">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl xl:test-5xl font-bold opacity-40 mb-2">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
              <img
                src={Image3}
                alt=""
                className="w-[320px] absolute bottom-0 top-10 right-[-20px]  lg:right-[-2rem]  scale-90"
              />
            </div>
          </div>

          {/* third col  */}
        </div>
      </div>
    </div>
  );
};

export default Category2;