import * as React from 'react';
import { ChoreContext } from 'context/chore/ChoreContext';
import { UserContext } from 'context/user/UserContext';
import getTimeFormat from 'utils/getTimeFormat';
import { DurationType } from 'context/chore/types';
import './style.css';

import BarChart from '../Charts/BarChart'

type Props2 = {
  choreName: string, 
  duration: DurationType
}

const ChoreTable = () => {

  const choreContext = React.useContext(ChoreContext);
  const { chores } = choreContext;
 

  const userContext = React.useContext(UserContext);
  const { isDarkTheme } = userContext;

   
  const tableRows = () => (
    chores.map( chore => chore.durations?.map( duration => (
      <ListTableRows key={duration._id} choreName={chore.choreName} duration={duration} />
      )
    )));


  const ListTableRows = ({choreName, duration}:Props2 ):JSX.Element => (
    <tr>      
      <td>
        {new Date(parseInt(duration.started, 10)).toLocaleDateString()}
      </td>
      <td>{choreName}</td>
      <td>
        {new Date(parseInt(duration.started, 10)).toLocaleTimeString()}
      </td>
      <td>{new Date(parseInt(duration.ended, 10)).toLocaleTimeString()}</td>
      <td>{getTimeFormat(parseInt(duration.duration))}</td>
    </tr>
  )

  

  return (
    <>    
    <div className={`chore-table-container ${!isDarkTheme && 'light'}`}>

    <BarChart chores={chores} />
    
      <table className='chore-table'>
        <caption>All Chores Details</caption>
        <thead>
          <tr>
            <th>Date</th>
            <th>Chore</th>
            <th>Started</th>
            <th>Ended</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
                  
      {tableRows()}

        </tbody>
      </table>
    </div>
    </>
  );
};

export default ChoreTable;
