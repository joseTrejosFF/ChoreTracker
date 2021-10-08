import { useContext, useRef } from 'react';
import UserForm from 'shared/UserForm';
import { ChoreContext } from 'context/chore/ChoreContext';
import './style.css';

const AddNewCard = () => {
  const choreContext = useContext(ChoreContext);

  const refText = useRef('');

  const handleFormInput = (text:string) => {
    refText.current = text;
  };
  
  return (
    <UserForm
      leftBtnActions={() => choreContext.actions.createChore(refText.current)}
      leftBtnIcon={<i className='fas fa-plus'></i>}
      leftBtnTooltiptext='Add New'
      renderInput={(text) => handleFormInput(text)}
      placeholder='Add New'
      doClearInputAfterSubmit={true}
    />
  );
};

export default AddNewCard;
