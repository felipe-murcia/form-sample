import React, { useState } from 'react'; 
import './index.css'; 
import backgroundImage1 from '../../assets/images/2151205456.jpg'
import backgroundImage2 from '../../assets/images/2342455138.jpg'
import backgroundImage3 from '../../assets/images/2149101154.jpg'

interface itemSlider{
    name: string;
    role: string;
    message: string;
    image: any
}
const sliderData: itemSlider[] = [
    {
        name: 'Jane Doe',
        role: 'Sr. Front-End Developer',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: backgroundImage1
    },
    {
        name: 'Mario Rossi',
        role: 'Data Scientist',
        message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: backgroundImage2
    },
    {
        name: 'Ivan Ivanovich',
        role: 'Sr. Back-End Developer',
        message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        image: backgroundImage3
    }
]

interface Props {
}
 
export const Silder = ({ }: Props) => {

    const [ index, setIndex ] = useState(0);

    const next = () => {
        setIndex( i => i + 1) 
    }

    const previous = () => {
        setIndex( i => i - 1)
    }

    const restart = () => {
        setIndex(0)
    }

    return(
        <>
            {
                sliderData.map((item:itemSlider, i:number)=>{
                    if( i == index) {
                        return(
                            <div className='background-container' style={{backgroundImage: `url(${sliderData[index].image})` }}> 
                                <div className='container-slider'  id="animatedDiv">

                                    <div className="text-container">

                                        <p className='txtSlider'>"{sliderData[index].message}"</p>
                                    </div>
                                    
                                    <div className='row space-between centerdiv'>
    
                                        <div className='box-user'>
                                            <p className='txtName'>{sliderData[index].name}</p>
                                            <p className='txtRole'>{sliderData[index].role}</p>
                                        </div>
    
                                        <div className='row space-between explore'>
                                            <img src={require('../../assets/icons/left-arrow.png')} width={25} height={25} onClick={()=>index===0?setIndex(2):previous()}/>
                                            <img src={require('../../assets/icons/right-arrow.png')} width={25} height={25} onClick={()=>index===2?setIndex(0):next()} />
                                        </div>
    
                                    </div>
    
                                </div>
                            </div>
                        )
                    }
                })
            } 
        </>
    )

}
 

 
   
