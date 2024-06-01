import React, { useContext, useState } from 'react'; 
import './index.css';  
import { AppContext } from '../../context/Context';
import TextInput from '../TextInput';
import Logotipo from '../Logo/intext';
import { IUser } from '../../interfaces'; 
import Button from '../Button';
import FormValidator from '../../utils/FormValidator';
import { Validator } from '../../utils/validate';
 
interface Props {
}
 
export const BoxForm = ({ }: Props) => {
  
    const { state: {  token, userData  }, setToken, setUserData } = useContext(AppContext);

    const setValue = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setUserData({ ...userData, [event.target.id]: event.target.value });
    }

    const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

    const formControl = new FormValidator();
    const validator = new Validator(); 
    formControl.addRule('fullname', validator.required('El nombre de usuario es requerido'));
    formControl.addRule('fullname', validator.minLength(3, 'El nombre de usuario debe tener al menos 3 caracteres'));
    formControl.addRule('fullname', validator.pattern(/^[a-zA-Z]+$/, 'El campo solo debe contener letras'));
    formControl.addRule('email', validator.required('El correo electrónico es requerido'));
    formControl.addRule('email', validator.email('El correo electrónico no es válido'));
    formControl.addRule('phone', validator.required('El telefono es requerido'));
    formControl.addRule('phone', validator.maxLength(10, 'El telefono  no debe exceder los 10 digitos'));
    formControl.addRule('phone', validator.minLength(10, 'El telefono debe tener 10 digitos'));
      
    const handleSubmit = () => {
        //alert('wuau')
        //e.preventDefault(); 
        const validationErrors = formControl.validate(userData);
        if (Object.keys(validationErrors).length === 0) {
          console.log('Formulario válido', userData);
          setToken('success')
          setErrors({})
        } else {
          setErrors(validationErrors);
          console.log(validationErrors)
        }
    };
  
    return( 
        <div className='container-form' > 
            
            <Logotipo />
            
            <h1 className='titleBox'>Get Started with Logoipsum</h1> 
            <p onClick={()=>setToken('testststs')} className='description'>
                Manage peopleeasly staring from now  
            </p>

            <br/>

            <TextInput 
                label={'Full name'} 
                id={'fullname'}
                value={userData?.fullname}
                placeholder='Jhon Doe'
                errors={errors.fullname}
                onChange={ (event: React.ChangeEvent<HTMLInputElement>)=> setValue(event)} 
            />

            <TextInput 
                label={'Email Address'} 
                id={'email'}
                value={userData?.email} 
                errors={errors.email}
                placeholder='example@mail.com'
                onChange={ (event: React.ChangeEvent<HTMLInputElement>)=> setValue(event)} 
            />

            <TextInput 
                label={'Phone number'} 
                id={'phone'}
                value={userData?.phone}  
                errors={errors.phone}
                placeholder='310xxxxxxx'  
                onChange={ (event: React.ChangeEvent<HTMLInputElement>)=> setValue(event)} 
            />
            
            <br/>

            <Button title={'Ingresar'} onClick={()=> handleSubmit() }  />
            
            
        </div>     
    )

}
 