import Layout from "./component/Layout";
import Home_page from "./views/Home_page";
import Services from "./views/Services";
import About from "./views/About";
import Contact from "./views/Contact";
import Book from "./views/Book";

function App() {
  return (
    <Layout>
      <div id="home">
        <Home_page />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="book">
        <Book />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Layout>
  );
}

export default App;
