import '../styles/app.module.css';
import styles from  '../styles/footer.module.css';

function App() {
  const {container}=styles

  return (
    <div className={container}>
      <div className={content}>
      <img src={logo} alt="logo" />

      </div>
    </div>
  );
}

export default App;
