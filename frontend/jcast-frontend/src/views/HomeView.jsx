import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Main from "../components/Main";
import Product from "../components/Product";

const HomeView = () => {
     return (
     <React.Fragment>
       <Header />
       <Main>
          <Intro />
          <Product />
       </Main>
       <Footer />
     </React.Fragment>
     );
};

export default HomeView;