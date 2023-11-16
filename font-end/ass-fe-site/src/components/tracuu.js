import React, { useEffect, useState } from 'react';
import '../css/tracuu.css';
function MyComponent() {
    useEffect(() => {
        document.title = 'Tra cứu';
    
        return () => {
          document.title = 'Mai Linh TOUR';
        };
      }, []);
    const [isFocused, setFocused] = useState(false);

    const handleInputFocus = () => {
        setFocused(true);
    }

    const handleInputBlur = () => {
        setFocused(false);
    }

    return (
        <div className="tracuu">
            <h1 className="mb-4">Tra cứu thông tin đặt vé</h1>
            <div className={`search-input-container ${isFocused ? 'focused' : ''}`}>
                <input
                 
                    className="search-input"
                    id="phoneNumber"
                    placeholder="Vui lòng nhập số điện thoại"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                <span className="placeholder-label">Số điện thoại</span>
            </div>
            <div className="search-input-container">
                <input  className="search-input" id="ticketNumber" placeholder="Vui lòng nhập mã vé" />
                <span className="placeholder-label">Mã vé</span>
            </div>
            <button className="search-button">Tra cứu</button>
        </div>
    );
}

export default MyComponent;
