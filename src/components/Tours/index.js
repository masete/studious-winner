import { useState } from 'react';
import './index.css'


const Tours = ({ tours }) =>{

    return (
        <>
            <section>
                <div className='title'>
                    <h2>Our Tours</h2>
                    <div className='underline'></div>
                </div>
                <div>
                    {tours.map((tour)=>{
                        return <Tours key={tour.id} {...tour}></Tours>
                    })};
                </div>
            </section>
        </>
    )
};

export default Tours