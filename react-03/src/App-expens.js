import React,{useState} from 'react';
import Form from './Expensivetracker/Form';
import Tracker from './Expensivetracker/Tracker';

const App = ()=>{
  const [track,settrack] = useState([]);
  return <>
          <Form track={track} settrack={settrack}/>
          <Tracker track={track}/>
         </>;
}

export default App;