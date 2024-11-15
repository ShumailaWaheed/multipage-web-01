
import Header from "@/Components/Header";
import Home from "@/Components/pages/Home";
import Expertise from "@/Components/Expertise";
import Skill from "@/Components/pages/Skill";
import Portfolio from "@/Components/pages/portfolio";
import Testimonial from "@/Components/pages/Testimonial";
import Blog from "@/Components/pages/Blog";
import Contact from "@/Components/pages/Contact";
import Footer from "@/Components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <Expertise />
      <Skill />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;