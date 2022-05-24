import Banner from "./Banner";
import NavBar from "./Navbar";

const styles = require('../styles/app.module.css')
function App() {
  const {container}=styles
  return (
    <div className={container}>
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;
