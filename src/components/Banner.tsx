import styles  from '../styles/banner.module.css'
import '../styles/app.module.css';
const hero =  require('../assets/illustration-mockups.svg').default

function Banner() {
  const {container,content,imageContainer}=styles
  return (
    <div className={container}>
      <div className={content}>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
  Create connections with your users as you engage in genuine discussion.</p>
        <button>Get Started for Free</button>
      </div>
      <div className={imageContainer}>
      <img src={hero} alt="hero" />
      </div>
    </div>
  );
}

export default Banner;
