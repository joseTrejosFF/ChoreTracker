import { useContext } from 'react';
import { UserContext } from 'context/user/UserContext';
import './style.css';

const Footer = () => {
  const userContext = useContext(UserContext);
  const { isDarkTheme } = userContext;

  return (
    <footer className={`footer-container ${!isDarkTheme && 'light'} `}>      
      <div className='footer-notes' >
        &copy; 2021
      </div>
    </footer>
  );
};

export default Footer;
