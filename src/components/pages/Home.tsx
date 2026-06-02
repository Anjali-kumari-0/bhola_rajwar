import Navbar from "../common/Navbar";
import About from "../sections/About";
import Hero from "../sections/Hero";
import PracticeAreas from "../sections/PracticeAreas";
import Statistics from "../sections/Statistics";

const Home = () => {
  return (
    <main className="primary-background min-h-screen">

      <Navbar />

      <Hero />

      <PracticeAreas />

      <About />

      <Statistics />

    </main>
  );
};

export default Home;