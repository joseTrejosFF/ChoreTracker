import { ChoreStateType } from 'context/chore/types';
import Button from 'shared/Button';

type Props = {
  chore: ChoreStateType,
  toggleBtnPin: (id: string) => void
}

const BtnPin = ({ chore, toggleBtnPin }:Props) => {

  const { _id, isMouseIn } = chore;

  const handlePin = () => {
    toggleBtnPin(_id);
  };

  return (
    <div>
      <Button
        className='btn-panel'
        value={<i className='fas fa-thumbtack'></i>}
        onClick={handlePin}
        isVisible={isMouseIn}
        tooltiptext={'Pin'}
      />
    </div>
  );
};

export default BtnPin;
