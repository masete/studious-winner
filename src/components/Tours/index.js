import { useState } from 'react';
import './index.css'

const url ='https://course-api.netlify.app/api/react-tours-project';

const fetchTours = async () =>{
    const response = fetch(url)
    
}
const Tours = () =>{
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    if(loading){
        return(
        <>
            <div>
                <loading />
            </div>
        </>)
    }
    return (
        <>
            <div className='frist-div'>
                <h1><Tours /></h1>
            </div>
        </>
    )
};

export default Tours