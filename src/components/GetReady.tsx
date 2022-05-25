import '../styles/app.module.css';
import styles from  '../styles/getready.module.css';


function App() {
  const {container}=styles
  return (
    <div className={container}>
      <h1>Ready To Build Your Community?</h1>
      <button>Get Started For Free</button>
    </div>
  );
}

export default App;
