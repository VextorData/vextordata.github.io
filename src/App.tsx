import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Technology from "./components/Technology";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          pt:"84px",
        }}
      >
        <Hero />
        <About />
        <Projects />
        <Technology />
        <Contact />
        <Footer />
      </Box>

    </>
  );
};

export default App