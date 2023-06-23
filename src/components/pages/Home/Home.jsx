import React, { useContext, useEffect, useState } from "react";
import Header from "../../share/Header/Header";
import Footer from "../../share/Footer/Footer";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

import Spinner from "../../share/Spinner/Spinner";
import Banner from "./Banner";
import Gallery from "./Gallery";
import ProductsTab from "./ProductsTab";
import AOS from "aos";
import "aos/dist/aos.css";
import Featurex from "./Featurex";
import Discount from "./Discount";
import Support from "./Support";
import PageTitle from "../../share/PageTitle/PageTitle";

const Home = () => {
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    AOS.init();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div>
      <PageTitle title="P7Robotics|Home" />
        <Header></Header>
    
        <Banner></Banner>
        <Gallery></Gallery>
       

        <div className="container mx-auto px-6">
          <ProductsTab></ProductsTab>
        </div>
        <Featurex></Featurex>
        
        <div
          data-aos="zoom-out"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="6000"
        >
          <Support/>
        </div>
       
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
