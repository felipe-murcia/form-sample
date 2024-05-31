import './index.css';

interface Props {
	title: string, 
  onClick: () => void
}

export default function Button({ title, onClick }:Props) {
    return (
      <button className='button-primary' onClick={onClick}>{title}</button>
    );
}

 