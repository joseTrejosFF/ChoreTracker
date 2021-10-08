import { useContext, useEffect } from 'react';
import Button from 'shared/Button';
import {UserContext} from 'context/user/UserContext';
import './style.css';


const GuiTheme = () => {
  const userContext = useContext(UserContext);
  const { isDarkTheme, actions } = userContext;
  const {toggleDarkTheme} = actions;

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, flag:boolean) => {
    toggleDarkTheme(flag);    
  };

 
  useEffect( 
    () => {
      (localStorage.getItem('theme') === 'light') &&  toggleDarkTheme(false)        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDarkTheme]
  )

  


 


  return (
    <div className='theme-selector'>
      {isDarkTheme ? (
        <Button
          value={<i className='fas fa-sun'></i>}
          className='btn-light-mode'
          onClick={(e) => onClick(e, false)}
          isVisible={true}
          tooltiptext='Light Mode'
        />
      ) : (
        <Button
          value={<i className='fas fa-moon'></i>}
          className='btn-dark-mode'
          onClick={(e) => onClick(e, true)}
          isVisible={true}
          tooltiptext='Dark Mode'
        />
      )}
    </div>
  );
};

export default GuiTheme;
