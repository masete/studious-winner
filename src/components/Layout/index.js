import './index.css';
import { useState, useEffect } from 'react';
import Loading from '../Loading'
import Tours from '../Tours';


const url ='https://course-api.netlify.app/api/react-tours-project';


const Layout = () =>{
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    const fetchTours = async () =>{
        const response = await fetch(url);
        const toursData = await response.json()
        console.log(toursData)
    }

    useEffect(()=>{
        fetchTours();
    })

    if(loading){
        return(
        
            <main>
                <Loading />
            </main>
        )
    };
    return (
        <>
            <main className='frist-div'>
                <h1><Tours /></h1>
            </main>
        </>
    )
};

export default Layout