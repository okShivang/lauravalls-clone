"use client";

import { useState } from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import ArchivePromo from "@/components/sections/ArchivePromo";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-primary-bg text-text-primary min-h-screen">
      <Header />
      <Hero />
      <PortfolioGrid />
      <Footer />
      <ArchivePromo />
    </div>
  );
}