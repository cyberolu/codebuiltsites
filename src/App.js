import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import WhyCode from "./components/WhyCode";
import Footer from "./components/Footer"; // <-- ADD THIS

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Hero
            onContactClick={() => setCurrentPage("contact")}
            onServicesClick={() => setCurrentPage("services")}
          />
        );
      case "services":
        return <Services />;
      case "portfolio":
        return <Portfolio />;
      case "about":
        return <About />;
      case "pricing":
        return <Pricing onChoosePlan={() => setCurrentPage("contact")} />;
      case "whycode":
        return <WhyCode />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      <main className="main-content">{renderPage()}</main>

      <Footer />  {/* <-- ADD FOOTER HERE */}
    </div>
  );
}

export default App;
