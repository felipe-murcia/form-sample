import React from 'react'; 
import './index.css';
import { BaseCard } from '../components/BaseCard';
import { Silder } from '../components/Slider';
import { BoxForm } from '../components/BoxForm';

function Index() {
  return (
    <div className="App" > 
        <BaseCard>
            <div style={{width:'50%', backgroundColor:'white'}}>
                <BoxForm />
            </div>
            <div style={{width:'50%', backgroundColor:'white'}}>
                <Silder />
            </div> 
        </BaseCard>
    </div>
  );
}

export default Index;
