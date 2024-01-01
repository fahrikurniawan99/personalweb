import Footer from "./components/Footer";
import NavbarTop from "./components/NavbarTop";
import Hero from "./landing/components/Hero";
import LatestPost from "./landing/components/LatestPost";

export default function Home() {
  return (
    <>
      <NavbarTop />
      <Hero />
      <LatestPost />
      <Footer />
    </>
  );
}
