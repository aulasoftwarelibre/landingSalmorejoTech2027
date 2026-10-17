"use client";
import Navbar from "@/app/components/navbar/navbar";
import AboutUs from "@/app/components/aboutUs/aboutUs";
import Footer from "@/app/components/footer/footer";
import Background from "@/app/components/background/background";

export default function Home() {
  return (
    <div className="relative" style={{ minHeight: "100vh" }}>
      <Background />
      <div style={{position: "relative", zIndex: 10}}>
       <Navbar/>
       <AboutUs/>
        <Footer />
      </div>
    </div>
  );
}