import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Main from "../components/Main";
import Product from "../components/Product";
import Skip from "../components/Skip";

const HomeView = () => {
     return (
     <>
       <Skip />
       <Header />
       <Main>
          <Intro />
          <Product />
       </Main>
       <Footer />
     </>
     );
};

export default HomeView;