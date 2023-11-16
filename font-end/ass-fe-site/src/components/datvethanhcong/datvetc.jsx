
import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [passengerName, setPassengerName] = useState('');
  const [carCompanies, setCarCompanies] = useState([
    {
      id: 1,
      licensePlate: '30A-12345',
      driverName: 'Nguyễn Văn A',
      phoneNumber: '0901234567',
      hotline: '18001234',
      note: 'Hướng dẫn lên xe: ...',
      paymentInstructions: 'Hướng dẫn thanh toán: ...',
      pickUpPoint: 'Điểm đón: ...',
      dropOffPoint: 'Điểm trả: ...',
    },
    // Thêm các nhà xe khác nếu cần
  ]);
  const [bookings, setBookings] = useState([
    {
      orderId: 'ABC123',
      fullName: 'Nguyễn Thị B',
      phoneNumber: '0987654321',
      idCard: '123456789',
      email: 'nguyenthib@example.com',
      route: 'Tuyến 1',
      vehicleType: 'Sedan',
      seatCode: 'A01',
      paymentMethod: 'Credit Card',
      status: 'Confirmed',
      ticketPrice: 50000,
      totalAmount: 50000,
    },
    // Thêm các chuyến đi khác nếu cần
  ]);

  const handleRouteChange = (event) => {
    setSelectedRoute(event.target.value);
  };

  const handleNameChange = (event) => {
    setPassengerName(event.target.value);
  };

  const handleBooking = () => {
    // Xử lý logic đặt vé ở đây, ví dụ: gửi yêu cầu đặt vé đến server
    console.log(`Đã đặt vé cho ${passengerName} trên tuyến ${selectedRoute}`);
  };

  return (
    <div className="App">
      <div className="routes-info">
        <h2>Thông tin nhà xe</h2>
        {carCompanies.map(company => (
          <div key={company.id}>
            <h3>{company.driverName}</h3>
            <p>Biển số xe: {company.licensePlate}</p>
            <p>Số điện thoại: {company.phoneNumber}</p>
            {/* Thêm các trường thông tin khác nếu cần */}
          </div>
        ))}
      </div>
      <div className="booking-info">
        <h2>Thông tin đặt vé</h2>
        <label>
          Chọn tuyến:
          <select value={selectedRoute} onChange={handleRouteChange}>
            {carCompanies.map(company => (
              <option key={company.id} value={company.driverName}>
                {company.driverName}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Tên hành khách:
          <input type="text" value={passengerName} onChange={handleNameChange} />
        </label>
        <br />
        <button onClick={handleBooking}>Đặt vé</button>
      </div>
    </div>
  );
}

export default App;
