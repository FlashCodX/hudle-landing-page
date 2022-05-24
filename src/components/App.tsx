import Banner from "./Banner";
import Cards from "./Cards";
import NavBar from "./Navbar";

const styles = require('../styles/app.module.css')
function App() {
  const {container}=styles
  return (
    <div className={container}>
      <NavBar/>
      <Banner/>
      <Cards/>
    </div>
  );
}

export default App;
