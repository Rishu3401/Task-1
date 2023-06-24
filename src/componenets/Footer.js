import React from 'react';
import '../App.css';
import '../CSS/Footer.css';
function Footer() {
  return (
    <footer className="footer">
        <div className="box">
          <img src={require('./image/back.png')} alt="Icon" />
          <span>BACK</span>
        </div>
        <div className="box">
          <img src={require('./image/refresh.png')} alt="Icon" />
          <span>REFRESH</span>
        </div>
        <div className="box">
          <img src={require('./image/delete.png')} alt="Icon" />
          <span>DELETE</span>
        </div>
        <div className="box">
          <img src={require('./image/search.png')} alt="Icon" />
          <span>SEARCH</span>
        </div>
        <div className="box">
          <img src={require('./image/show.png')} alt="Icon" />
          <span>SHOW</span>
        </div>
        <div className="box">
          <img src={require('./image/print.png')} alt="Icon" />
          <span>PRINT</span>
        </div>
        <div className="box">
          <img src={require('./image/addnew.png')} alt="Icon" />
          <span>ADD NEW</span>
        </div>
    </footer>
  );
}

export default Footer;
