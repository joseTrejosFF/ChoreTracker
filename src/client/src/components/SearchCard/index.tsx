import { useContext, useRef } from 'react';
import UserForm from 'shared/UserForm';
import { ChoreContext } from 'context/chore/ChoreContext';
import { UserContext } from 'context/user/UserContext';
import './style.css';


const SearchCard = () => {

  const choreContext = useContext(ChoreContext);

  const userContext = useContext(UserContext);

  const { actions } = userContext;
  const { getSearchResults, clearSearchResults } = actions;

  const refText = useRef('');

  const handleFormInput = (text: string) => {    
    refText.current = text;     
  };

  const handleSearch = () => {
    if (refText.current.length >= 2) { 
      getSearchResults(refText.current, choreContext.chores)
    }
  }

  return (
    <UserForm
      leftBtnActions={ handleSearch }
      leftBtnIcon={<i className='fas fa-search'></i>}
      leftBtnTooltiptext='Search'
      renderInput={(text) => handleFormInput(text)}
      placeholder='Search'
      rightBtnActions={() => clearSearchResults()}
    />
  );
};

export default SearchCard;
