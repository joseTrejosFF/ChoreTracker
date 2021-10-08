import Button from 'shared/Button';
import BtnRename from '../BtnRename';
import BtnPin from '../BtnPin';
import { ChoreStateType, ChoreContextType } from 'context/chore/types';
import './style.css';

type Props = {
  chore: ChoreStateType,
  actions: ChoreContextType['actions'],
  handleStart: () => void,
  handleStop: () => void,
  killStopwatch: () => void,
}


const WrapperBtn = ({
  chore,
  actions,
  handleStart,
  handleStop,
  killStopwatch,
}:Props) => {

  const {latest, isMouseIn,} = chore;
  const { isActive } = latest

  const { renameChore, toggleBtnPin } = actions

  return (
    <div className='btn-panel-container'>
      <Button
        className='btn-panel'
        isVisible={isMouseIn}
        onClick={() => {
          isActive ? handleStop() : handleStart();
        }}
        tooltiptext={isActive ? 'Stop' : 'Play'}
        value={
          isActive ? (
            <i className='fas fa-stop'></i>
          ) : (
            <i className='fas fa-play'></i>
          )
        }
      />

      <BtnPin         
        chore={chore}
        toggleBtnPin={toggleBtnPin} />

      <BtnRename         
        chore={chore}
        renameChore={renameChore} />


      {/* TODO: Card color picker */}
      {/* <Button
        className='btn-panel'
        value={<i className='fas fa-palette'></i>}
        onClick={() => console.log('Btn-change-chore-color clicked')}
        isVisible={isMouseIn}
        tooltiptext={'Color'}
      /> */}

      <Button
        className='btn-panel btn-delete'
        value={<i className='fas fa-window-close'></i>}
        isVisible={isMouseIn}
        onClick={() => killStopwatch()}
        tooltiptext={'Delete'}
      />
    </div>
  );
};

export default WrapperBtn;
