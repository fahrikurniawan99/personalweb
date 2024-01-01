import NavbarTop from "@/app/components/NavbarTop";
import React from "react";
import DetailBlog from "../../components/DetailBlog";
import Footer from "@/app/components/Footer";

export default function page() {
  return (
    <>
      <NavbarTop />
      <DetailBlog />
      <Footer />
    </>
  );
}
