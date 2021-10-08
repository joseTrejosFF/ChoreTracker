import { NavLink } from 'react-router-dom';
import './style.css';

const TabSelector = () => {
  return (
    <div className='tab-selector'>
      <NavLink
        to='/chorelist'
        className='btn tab-item'
        activeClassName='selected'
      >
        <i className='fas fa-th-large'></i>
        <span className='tooltiptext'>Cards</span>
      </NavLink>
      <NavLink
        to='/choretable'
        className='btn tab-item'
        activeClassName='selected'
      >
        <i className='far fa-chart-bar'></i>
        <span className='tooltiptext'>Charts</span>
      </NavLink>
    </div>
  );
};

export default TabSelector;
