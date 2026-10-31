"use client";
import Navbar from "@/app/components/navbar/navbar";
import Body from "@/app/components/body/body";
import Footer from "@/app/components/footer/footer";
import Background from "@/app/components/background/background";

export default function Home() {
  return (
    <div className="relative" style={{ minHeight: "100svh" }}>
      <Background />
      <div 
        style={{
            position: "relative", 
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            minHeight:"100svh",
          }}>
        <Navbar/>
        <Body />
        <Footer />
      </div>
    </div>
  );
}