import { BiPhoneCall } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';


import { AiFillInstagram,AiFillTwitterCircle, AiFillFacebook} from 'react-icons/ai';

import '../styles/app.module.css';
import styles from  '../styles/footer.module.css';
import GetReady from './GetReady';
const logo = require('../assets/logowhite.svg').default

function Footer() {
  const {container,content,contacts,links,socials,socialsContainer,imageContainer,footerContent}=styles

  return (
    <footer className={container}>
      <GetReady/>
      <div className={content}>
        <div className={imageContainer}>
        <img src={logo} alt="logo" />
        </div>
        <div className={footerContent}>
        <div className={contacts}>
        <div>
        <GoLocation/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div>
        <BiPhoneCall/>
<p>+1-543-123-4567</p>
        </div>

        <div>
        <AiOutlineMail/>
<p>example@huddle.com</p>
        </div>
      </div>
      <div className={links}>
        <a href="#">About Us</a>
        <a href="#">What We Do</a>
        <a href="#">FAQ</a>
        <a href="#">Career</a>
        <a href="#">Blog</a>
        <a href="#">Contact Us</a>
      </div>

      <div className={socials}>
        <div className={socialsContainer}>
        <AiFillFacebook/>
      <AiFillTwitterCircle/>
      <AiFillInstagram/>
        </div>
     <div>&copy; Copyright 2018 Huddle. All rights reserved.</div>
      </div>
        </div>
     
      </div>
    </footer>
  );
}

export default Footer;
