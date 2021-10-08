import { Fragment, useState } from 'react';
import Button from 'shared/Button';
import { ChoreStateType } from 'context/chore/types';
import './style.css';


type Props = {
  chore: ChoreStateType,
  renameChore: (id: string, choreName: string) => void
}

const BtnRename = ({ chore, renameChore }:Props) => {

  const {_id, isMouseIn} = chore

  const [formState, setFormState] = useState({
    text: '',
    isActive: false,
  });

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      text: e.target.value,
    });
  };

  const toggleShowForm = (flag = false) => {
    setFormState({
      ...formState,
      isActive: flag,
    });
  };

  const clearForm = () => {
    setFormState({
      text: '',
      isActive: false,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveTitle()
 
  };

  const handleBlur = () => {
    saveTitle();
  }

  const saveTitle = () => {
    renameChore(_id, formState.text);
    clearForm();
    toggleShowForm(false);
  }

  return (
    <Fragment>
      <Button
        className='btn-panel'
        value={<i className='fas fa-pen'></i>}
        onClick={() => toggleShowForm(true)}
        isVisible={isMouseIn}
        tooltiptext={'Rename'}
      />
      {formState.isActive && (
        <form onSubmit={e => onSubmit(e)} className='form-rename-chore'>
          <div>
            <input
              autoFocus
              className='rename-input'
              onChange={e => handleInput(e)}
              onBlur={handleBlur}
              placeholder='New name'
              type='text'
              value={formState.text}
            />
            <input type='submit' value='Submit' hidden />
          </div>
        </form>
      )}
    </Fragment>
  );
};

export default BtnRename;
