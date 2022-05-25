import Banner from "./Banner";
import Cards from "./Cards";
import Footer from "./Footer";
import GetReady from "./GetReady";
import NavBar from "./Navbar";

const styles = require('../styles/app.module.css')
function App() {
  const {container}=styles
  return (
    <main className={container}>
      <NavBar/>
      <Banner/>
      <Cards/>
      <Footer/>
    </main>
  );
}

export default App;
