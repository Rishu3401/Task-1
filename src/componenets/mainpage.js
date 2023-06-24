import React, { useState } from 'react';
import '../App.css';

const Mainpage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className='mainpage'>
      <div
        className={`mainbox1 ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        QBH ERP SOLUTION
      </div>
      <div className='mainbox'>
        <img src={require('./image/Picture1.png')} alt='Logo' className='logo' />
        Nos. of total items
      </div>
      <div className='mainbox'>
        <img src={require('./image/Picture2.png')} alt='Logo' className='logo' />
        Nos. of Total items
      </div>
      <div className='mainbox'>
        <img src={require('./image/Picture3.png')} alt='Logo' className='logo' />
        Nos. of Discontinuous items
      </div>
      <div className='mainbox'>
        <img src={require('./image/Picture4.png')} alt='Logo' className='logo' />
        Nos. of Total Stock
      </div>
      <div className='mainbox'>
        <img src={require('./image/Picture5.png')} alt='Logo' className='logo' />
        Item Received/Items Sold
      </div>
    </div>
  );
};

export default Mainpage;
