import Banner from "./Banner";
import Cards from "./Cards";
import Footer from "./Footer";
import GetReady from "./GetReady";
import NavBar from "./Navbar";

const styles = require('../styles/app.module.css')
function App() {
  const {container}=styles
  return (
    <div className={container}>
      <NavBar/>
      <Banner/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
