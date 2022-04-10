import React from "react";
import ComplementSection from "../../components/ComplementSection";
import Footer from "../../components/Footer";
import MainSection from "../../components/MainSection";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <MainSection />
      <ComplementSection />
      <Footer />
    </>
  );
}

export default Home;
