import React from 'react';
import './Tshirt.css';

const Tshirt = ({tshirt , clickBuyBtn}) => {
    const {name, picture , price} = tshirt
    return (
        <div className='shirt-container'>
          <div className="img">
            <img src= {picture} alt="" />
          </div>
          <div className="text">
            <h1>{name}</h1>
            <h3>Price : $ {price}</h3>
            
          </div>
          
          <button onClick={()=>clickBuyBtn(tshirt)}>Buy Now</button>

        </div>
    );
};

export default Tshirt;