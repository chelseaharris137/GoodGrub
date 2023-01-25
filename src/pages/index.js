import { About, HeroSection } from "@/components/home";
import { Fragment } from "react";

const Home = () =>{
  return (
    <Fragment>
      <HeroSection />

      <About />
    </Fragment>
  );
};

export default Home;
