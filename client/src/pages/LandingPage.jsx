import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FeaturesSection from "../components/FeaturesSection";
import ProductShowcase from "../components/ProductShowcase";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <FeaturesSection />
      <ProductShowcase/>
    </>
  );
}

export default LandingPage;