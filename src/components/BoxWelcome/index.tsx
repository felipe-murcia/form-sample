import React, { useContext, useState } from 'react'; 
import './index.css';  
import { AppContext } from '../../context/Context';
import TextInput from '../TextInput';
import Logotipo from '../Logo/intext';
import { IUser } from '../../interfaces'; 
import Button from '../Button';
import FormValidator from '../../utils/FormValidator';
import { Validator } from '../../utils/validate';
import imageWelcome from './7119120_3343839.jpg';

interface Props {
}
 
export const BoxWelcome = ({ }: Props) => {
  
    const { state: {  token, userData  }, setToken, setUserData } = useContext(AppContext);

    const fullName = userData.fullname 

    return( 
        <div className='container-form' > 
            
            <Logotipo />
             
            <div className="typing-container">
                <h1 className="typing-title">Hola, {fullName?.split(" ")[0]}!</h1>
                <h2 className="typing-subtitle">Welcome back lorem ipsum!</h2>
            </div>

            <img src={imageWelcome} width={'100%'} /> 
            
        </div>     
    )

}
 