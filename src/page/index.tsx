import React, { useContext } from 'react'; 
import './index.css';
import { BaseCard } from '../components/BaseCard';
import { Silder } from '../components/Slider';
import { BoxForm } from '../components/BoxForm';
import { AppContext } from '../context/Context';
import { BoxWelcome } from '../components/BoxWelcome';

function Index() {

  const { state: {  token } } = useContext(AppContext);

  return (
    <div className="App" > 
        <BaseCard>
            <div style={{width:'50%', backgroundColor:'white'}}>
              { token==='success'? <BoxWelcome /> :  <BoxForm /> }
               
            </div>
            <div style={{width:'50%', backgroundColor:'white'}}>
                <Silder />
            </div> 
        </BaseCard>
    </div>
  );
}

export default Index;
