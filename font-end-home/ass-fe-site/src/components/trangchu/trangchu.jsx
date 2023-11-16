import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import '../../css/routes.css'; // Import file CSS cho phần này

import baner1 from '../../image/baner1.png';
import ThongTin from "./thongtin.js";
import { Outlet } from "react-router-dom";
import Timchuyen from '../timchuyen';
function Home() {
  useEffect(() => {
    document.title = 'Trang chủ';

    return () => {
      document.title = 'Mai Linh TOUR';
    };
  }, []);

  const [showCityModal, setShowCityModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(''); // State để lưu tỉnh thành đã chọn
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const provinces = [
    { code: 'SG', name: 'TP. Hồ Chí Minh' },
    { code: 'HN', name: 'Hà Nội' },
    { code: 'DN', name: 'Đà Nẵng' },
    // Thêm các tỉnh thành khác ở đây
  ];

  const handleCityClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    setModalPosition({ top: rect.bottom + 10, left: rect.left }); // Đặt vị trí cho modal
    setShowCityModal(true);
  };

  const handleCloseCityModal = () => {
    setShowCityModal(false);
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setShowCityModal(false);
  };
  return (

    <section className="routes">
      <div className="large-image">
        <img src={baner1} alt="large" />
      </div>
       <Timchuyen/>
       <ThongTin />
   
    </section>
  );
}

export default Home;

