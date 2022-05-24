import styles from '../styles/navbar.module.css' 
const logo = require('../assets/logo.svg').default
function NavBar() {
  const {container}= styles
  return (
    <div className={container}>
      <img src={logo} alt="logo" />
      <button>Try It Free</button>
    </div>
  );
}

export default NavBar;
