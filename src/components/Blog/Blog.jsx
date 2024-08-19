import React from "react";
import Heading from "../shared/Heading";
import Image1 from "../../assets/blogs/blog-1.jpg";
import Image2 from "../../assets/blogs/blog-2.jpg";
import Image3 from "../../assets/blogs/blog-3.jpg";
const Blog = () => {
  const blogData = [
    {
      title: "How to Choose the Perfect Smartwatch",
      subtitle:
        "A comprehensive guide to finding the ideal smartwatch for your needs.",
      published: "January 2024 by Pratham",
      image: Image1,
      aosDelay: "0",
    },
    {
      title: "Top 10 Headphones for Audiophiles in 2024",
      subtitle:
        "Discover the best headphones to elevate your audio experience.",
      published: "February 2024 by Pratham",
      image: Image2,
      aosDelay: "200",
    },
    {
      title: "Smartwatches vs. Fitness Trackers: Which is Right for You?",
      subtitle: "Comparing features and functionalities to help you decide.",
      published: "March 2024 by Pratham",
      image: Image3,
      aosDelay: "400",
    },
  ];
  return (
    <div>
      <div className="container">
        <Heading title={"Recent News"} subTitle={"Explore Our Blogs"} />

        {/* Blog Section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {blogData.map((blog) => (
            <div
              data-aos="fade-up"
              data-aos-delay={blog.aosDelay}
              key={blog.title}
              className=" p-3 flex flex-col justify-start "
            >
              {/* image section  */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={blog.image}
                  className="w-full h-[220px] object-cover rounded-lg hover:scale-105 duration-500"
                  alt=""
                />
              </div>

              {/* content Section  */}
              <div className="space-y-2 text-black dark:text-white ">
                <p className="text-sm text-gray-500 mt-1">{blog.published}</p>
                <p className="font-bold line-clamp-1">{blog.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {blog.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
