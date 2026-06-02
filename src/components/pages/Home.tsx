import { fadeUp } from "../../animations";
import MotionWrapper from "../../animations/MotionWrapper";
import Navbar from "../common/Navbar";
import About from "../sections/About";
import Hero from "../sections/Hero";
import PracticeAreas from "../sections/PracticeAreas";
import Statistics from "../sections/Statistics";

const Home = () => {
  return (
    <main className="primary-background min-h-screen">

      <Navbar />
      <MotionWrapper variants={fadeUp}>
        <Hero />
      </MotionWrapper>


      <MotionWrapper variants={fadeUp}>
        <PracticeAreas />
      </MotionWrapper>


      <MotionWrapper variants={fadeUp}>
        <About />
      </MotionWrapper>


      <MotionWrapper variants={fadeUp}>
        <Statistics />
      </MotionWrapper>

    </main>
  );
};

export default Home;