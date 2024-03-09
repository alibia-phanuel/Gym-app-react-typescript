import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { SelectedPage } from "./Components/Navbar/types";
import Home from "./Components/home";
import Benefits from "./Components/Benefits";
import OurClasses from "./Components/OurClasses";
import ContactUs from "./contactUs";
import Footer from "./Components/footer";
function App() {
  //Etat de notre page avec un typage strincte (SelectedPage)
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  //LE Use effect detecte quand quand on scrool et effectu des changement en fontion de la condition
  useEffect(() => {
    const handleScroll = () => {
      //verification de la valleur du scrool
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      //changement de l'etat a false
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //menu fixed useeffect
  return (
    <>
      <div className="bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </>
  );
}

export default App;
