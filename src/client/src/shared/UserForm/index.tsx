import { useState } from 'react';
import Button from 'shared/Button';
import UserInput from './UserInput';
import './style.css';

type Props = {
  leftBtnIcon: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
  leftBtnTooltiptext: string,
  leftBtnActions: React.MouseEventHandler<HTMLButtonElement>
  placeholder: string,
  rightBtnActions?: () => void,
  renderInput: (userInput:string)=>void,
  doClearInputAfterSubmit?: boolean,
}

export default function UserForm (
  {
    leftBtnIcon,
    leftBtnTooltiptext,
    leftBtnActions,
    placeholder,
    rightBtnActions,
    renderInput,
    doClearInputAfterSubmit = false,
  }:Props
) {
  const [formState, setFormState] = useState({
    inputValue: '',
    isFormFocus: false,
  });
  const { inputValue, isFormFocus } = formState;

  const toggleFocus = (flag = false) =>
    setFormState({ ...formState, isFormFocus: flag });

  const handleClearForm = () => {
    setFormState({
      inputValue: '',
      isFormFocus: false,
    });
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormState({ ...formState, inputValue: e.target.value });

  const leftBtnOnClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => leftBtnActions(e);

  const rightBtnOnClick = () => {
    (typeof rightBtnActions !== 'undefined' ) && rightBtnActions();
    handleClearForm();
  };

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    doClearInputAfterSubmit && handleClearForm();
  };

  return (
    <div className='user-form-container'>
      <form
        onSubmit={ e => onSubmit(e)}
        className={`user-form  ${isFormFocus && 'user-form-focus'}`}
        onFocus={() => toggleFocus(true)}
        onBlur={() => toggleFocus(false)}
      >
        <Button
          className={`left-btn ${isFormFocus && 'left-btn-form-focus'}`}
          onClick={ e => leftBtnOnClick(e)}
          tooltiptext={leftBtnTooltiptext}
          type='submit'
          value={leftBtnIcon}
        />

        <UserInput
          className='user-input'
          placeholder={placeholder}
          onChange={onChangeInput}
          value={inputValue}
        />

        <Button
          className={`btn-clear-search-input ${
            isFormFocus && 'btn-clear-search-input-form-focus'
          }`}
          isVisible={inputValue}
          onClick={rightBtnOnClick}
          tooltiptext='Clear'
          value={<i className='fas fa-times'></i>}
        />
      </form>
      {renderInput(formState.inputValue)}
    </div>
  );
};


