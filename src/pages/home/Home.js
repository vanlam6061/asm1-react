import { useState } from "react";

import Header from "../../layout/Header/Header";
import HomeContent from "./HomeContent";
import Footer from "../../layout/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default Home;
