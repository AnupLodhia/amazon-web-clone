import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          {/* Product */}
          <Product
            id="12133456"
            title="Titan Watch: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure libero eaque aspernatur et doloribus.Lorem ipsum dolor sit amet."
            price={10000}
            image="https://m.media-amazon.com/images/I/81zMfbWnNDL._UL1500_.jpg"
            rating={4}
          />
          <Product
            id="33212345"
            title="Samsung Galaxy Z-fold-3 :Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure libero eaque aspernatur et doloribus.Lorem ipsum dolor sit amet."
            price={250000}
            image="https://images.samsung.com/levant/smartphones/galaxy-z-fold3-5g/buy/zfold3_carousel_mainsinglekv_mo.jpg"
            rating={5}
          />
          {/* Product */}
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="41258456"
            title="Havells Table fan: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure libero eaque aspernatur et doloribus."
            price={5000}
            image="https://m.media-amazon.com/images/I/716X3Z27XaL._SL1200_.jpg"
            rating={4}
          />
          <Product
            id="51245879"
            title="Dell G15 Gaming Laptop: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure libero eaque aspernatur et doloribus."
            price={80000}
            image="https://m.media-amazon.com/images/I/61BE1LBx0kS._SL1080_.jpg"
            rating={4}
          />
          <Product
            id="621458788"
            title="Android Smart Watch: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure libero eaque aspernatur et doloribus."
            price={5000}
            image="https://m.media-amazon.com/images/I/613H-05XuzL._AC_SL1500_.jpg"
            rating={5}
          />
          {/* Product */}
          {/* Product */}
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="81245788"
            title="Samsung 8K Smart LED Tv: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure libero eaque aspernatur et doloribus.Lorem ipsum dolor sit amet."
            price={80000}
            image="https://5.imimg.com/data5/FK/DT/BI/SELLER-81092709/65-inch-samsung-smart-led-tv-500x500.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
