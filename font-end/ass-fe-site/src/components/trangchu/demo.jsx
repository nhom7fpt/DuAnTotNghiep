import React, { Component } from 'react';
import '../css/style.css'; // Import CSS file if needed

class ScheduleComponent extends Component {
    constructor() {
        super();
        this.state = {
            departure: '',
            destination: '',
        };
    }

    searchSchedule = () => {
        const { departure, destination } = this.state;
        const table = document.getElementById("scheduleTable");

        // Clear existing table rows except for the header
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        // You can add code here to dynamically populate the table with search results
        // For now, let's add a sample row as a placeholder
        const newRow = table.insertRow(1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        cell1.innerHTML = "Ngày 4";
        cell2.innerHTML = "09:30";
        cell3.innerHTML = "Hồ Chí Minh";
    }

    render() {
        return (
            <div className="schedule mx">
                <h2>Lịch Trình Tuyến Xe Bus</h2>
                <div className="search-container">
                    <label htmlFor="departure">Điểm Đi:</label>
                    <input
                        type="text"
                        id="departure"
                        name="departure"
                        placeholder="Nhập điểm đi..."
                        value={this.state.departure}
                        onChange={(e) => this.setState({ departure: e.target.value })}
                    />

                    <label htmlFor="destination">Điểm Đến:</label>
                    <input
                        type="text"
                        id="destination"
                        name="destination"
                        placeholder="Nhập điểm đến..."
                        value={this.state.destination}
                        onChange={(e) => this.setState({ destination: e.target.value })}
                    />

                    <button onClick={this.searchSchedule}>Tìm Lịch Trình</button>
                </div>

                <table id="scheduleTable">
                    <tr>
                        <th>Ngày</th>
                        <th>Thời Gian</th>
                        <th>Điểm Đến</th>
                    </tr>
                    <tr>
                        <td>Ngày 1</td>
                        <td>08:00</td>
                        <td>Hà Nội</td>
                    </tr>
                    <tr>
                        <td>Ngày 2</td>
                        <td>12:30</td>
                        <td>Huế</td>
                    </tr>
                    <tr>
                        <td>Ngày 3</td>
                        <td>15:45</td>
                        <td>Đà Nẵng</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default ScheduleComponent;
