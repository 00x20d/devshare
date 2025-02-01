"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";

const App = () => (
  <div className='min-h-screen bg-background'>
    <Navbar />
    <Hero />
    <Features />
  </div>
);

export default App;
