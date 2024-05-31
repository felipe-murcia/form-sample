import { ChangeEvent } from 'react';
import './index.css';

interface Props {
  id?: string;
	label: string;
  placeholder?: string;
  value: any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errors?: string[]
}

function TextInput({ label, onChange, value, errors = [], placeholder, id }:Props) {
 
    return (
      <div className="box-input">
          <label className="label-input">{label} <span className="req">*</span></label>
          <input 
              id={id}
              type="text"  
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className={'textInput '+(errors!.length >=1 && 'textInputError')} />
              { errors?.map((error:string)=> <span className="text-error">- {error}</span>)}
              {/* {error?<span className="text-error">{error}</span>: <span className="text-error">&nbsp;</span>}   */}
      </div>
    );
}

export default TextInput;

 