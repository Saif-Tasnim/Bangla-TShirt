import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {
    const data = useLoaderData();
    
    const clickBuyBtn = shirt => {
        console.log(shirt);
    }
    return (
        <div className='home-container'>
            <div className='tshirt-contain'>
                {
                    data.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        clickBuyBtn = {clickBuyBtn}
                    ></Tshirt>)
                }

            </div>

            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;