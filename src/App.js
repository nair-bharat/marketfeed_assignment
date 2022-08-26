import Header from "./components/Header";
import About from "./components/About";
import Discord from "./components/Discord";
import Card from "./components/Card.js";
import NewPrograms from "./components/NewPrograms.js";
import Sessions from "./components/Sessions";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Card />
      <About />
      <Discord />
      <NewPrograms />
      <Sessions />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
