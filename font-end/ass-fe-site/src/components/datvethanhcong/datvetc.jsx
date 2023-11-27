import React from 'react';
import './dvtc.css'; 
import Thongtinchuyendi from'./thongtinchuyendi';
import Diamdiem from'./diadiem.js';
import Huongdan from'./huongdandvtc.js';
import Titledvtc from'./titledvtc.js';
const Datvethanhcong = () => {
  return (
    <div className='pagedatvethanhcong'>
     <Titledvtc />
     <Huongdan />
     <Diamdiem />
     <Thongtinchuyendi />
    </div>
  );
};

export default Datvethanhcong;
