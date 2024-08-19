import "./App.css";
import Category from "./components/category/Category.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Category2 from "./components/category/Category2.jsx";
import Services from "./components/services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import headphone from "./assets/hero/headphone.png";
import Products from "./components/products/Products.jsx";
import smartWatch from "./assets/category/smartWatch2-removebg-preview.png";
import Blog from "./components/Blog/Blog.jsx";
import Partners from "./components/Partners/Partners.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  const BannerData = {
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 Jan to 28 Jan",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "Get Ready for the Winter Sale",
    bgColor: "#f42c37",
  };
  const BannerData2 = {
    discount: "30% OFF",
    title: "Happy Hour",
    date: "14 Jan to 28 Jan",
    image: smartWatch,
    title2: "Smart Solo",
    title3: "Winter Sale",
    title4: "Get Ready for the Winter Sale",
    bgColor: "#2dcc6f",
  };
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderpopup = () => {
    console.log(orderPopup);

    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderpopup={handleOrderpopup} />
      <Hero handleOrderpopup={handleOrderpopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blog />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}

export default App;
