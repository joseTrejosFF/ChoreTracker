import { useContext } from 'react';
import { ChoreContext } from 'context/chore/ChoreContext';
import { UserContext } from 'context/user/UserContext';
import Card from 'components/Card';
import './style.css';


const Cards = () => {

  const choreContext = useContext(ChoreContext);
  const userContext = useContext(UserContext);
   
  const {chores, actions  } = choreContext;
  

  const { 
    currentSearch,     
    isDarkTheme 
  } = userContext;

 
  return (
    <div
      className={`cards-container ${!isDarkTheme && 'light'}`}
    >
      {currentSearch
        ? (
            <div className='card-wrapper'>
              {currentSearch.map(
              chore => (
                <Card      
                  key={chore._id}
                  chore={chore}
                  actions={actions}                
                />)
              )}
              {currentSearch.length === 0 && <h2>No Results found</h2>}
            </div>          
          )
        : (<>
            <h2 className='title-card-wrapper'>Pinned: </h2>
            <div className='pin-card-wraperr card-wrapper'>
              {
                chores.filter( chore => chore.isPinned).map( chore => (
                    <Card      
                      key={chore._id}
                      chore={chore}
                      actions={actions}                
                    />
                )) 
              }    
            </div>
    
            <h2 className='title-card-wrapper'>Others: </h2>
            <div className='card-wrapper'>
            {
              chores.filter( chore => !chore.isPinned).map(
                chore => (
                  <Card      
                    key={chore._id}
                    chore={chore}
                    actions={actions}                
                  />)
              ) 
            }
    
            </div>
          </>)
        }
    </div>
  );
};

export default Cards;
