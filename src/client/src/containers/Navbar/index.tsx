import TabSelector from '../../components/TabSelector';
import SearchCard from 'components/SearchCard';
import AddNewCard from 'components/AddNewCard';
import GuiTheme from 'components/GuiTheme';
import './style.css';
import {UserContext} from 'context/user/UserContext';
import { ChoreContext } from 'context/chore/ChoreContext';

import { useContext, useEffect } from 'react';

const Navbar = ({ title = 'Chore Tracker' }) => {

  const choreContext = useContext(ChoreContext);  

  useEffect(() => {
    choreContext.actions.getAllChores();  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const userContext = useContext(UserContext);
  const { isDarkTheme } = userContext;


  return (
    <nav className={`navbar ${!isDarkTheme && 'light'}`}>
      <div>
        <i className='fas fa-stopwatch '></i>
        <h1 className='main-title'>{title}</h1>
      </div>
      <TabSelector />
      <SearchCard />
      <AddNewCard />

      <GuiTheme />

      {/* TODO: User selector  */}
      {/* <div className='user-selector'>
        <i className='fas fa-user'></i>
      </div> */}

    </nav>
  );
};

export default Navbar;
