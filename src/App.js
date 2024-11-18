import "./assets/css/style.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div>
        <Header />
        <Gallery />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
