import React from 'react'; 
import './index.css';
import { Silder } from '../Slider';

interface Props {
    children: JSX.Element | JSX.Element[] 
}
 
export const BaseCard = ({ children }: Props) => {

    return(
        <div className='basecard'>
            {children}
        </div>
    )

}
 

 
   
