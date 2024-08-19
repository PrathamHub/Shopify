import React from "react";
import {
  FaCarSide,
  FaCheckCircle,
  FaHeadphonesAlt,
  FaWallet,
} from "react-icons/fa";

const Services = () => {
  const ServiceData = [
    {
      id: 1,
      icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
      title: "Free Shipping",
      description: "Free shipping on all order",
    },
    {
      id: 2,
      icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
      title: "Safe Money",
      description: "30 days Money Back",
    },
    {
      id: 3,
      icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
      title: "Secure Payment",
      description: "All Payment Secure",
    },
    {
      id: 4,
      icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
      title: "Online Support 24*7",
      description: "Technical Sipport 24*7",
    },
  ];
  return (
    <div>
      <div className="container mt-14 md:mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gapy-8 gap-y-8">
          {ServiceData.map((service) => (
            <div key={service.id} className="flex flex-col ">
              {service.icon}
              <div className="">
                <h1 className="lg:text-xl font-semibold">{service.title}</h1>
                <h1 className="text-xl text-gray-400">{service.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
