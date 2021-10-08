import Stopwatch from './Stopwatch';
import Title from './Title';
import { ChoreStateType, ChoreContextType } from 'context/chore/types'
import './style.css';

type Props = {
  chore: ChoreStateType,
  actions: ChoreContextType['actions']
}

const Card = ({chore, actions}:Props) => {

  const { toggleIsMouseIn } = actions

  return (
    <div
      className='card'
      
      onMouseEnter={() => {
        toggleIsMouseIn(chore._id, true);        
      }}
      onMouseLeave={() => {
        toggleIsMouseIn(chore._id, false);
      }}
    >
      <Title choreName={chore.choreName} />
      <Stopwatch  
        actions={actions}
        chore={chore}
      />
    </div>
  );
};

export default Card;
