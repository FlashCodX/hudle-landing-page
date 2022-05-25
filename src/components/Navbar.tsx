import styles from '../styles/navbar.module.css' 
const logo = require('../assets/logo.svg').default
function NavBar() {
  const {container}= styles
  return (
    <nav className={container}>
      <img src={logo} alt="logo" />
      <button>Try It Free</button>
    </nav>
  );
}

export default NavBar;
