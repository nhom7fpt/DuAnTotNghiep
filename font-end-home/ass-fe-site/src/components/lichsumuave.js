import React, { useState } from 'react';
import '../css/lichsumuave.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';  
import Menudangnhap from'../components/menudangnhap'// Import CSS cho DatePicker
function Lichsimuave() {
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    return (
        <div className="border">
            <div className=""style={{height:'600px'}}>
                <div className="mr-1 p-3 mr-0 p-0">
                    <div className="grid grid-col-12 gap-0 gap-8">
                    <Menudangnhap/>
                        <div className="col-span-9 mt-6" style={{marginLeft:'12cm', marginTop:'1cm'}}>
                            <div>
                                <div className="row" style={{ height: '100px', display: 'flex' }}>
                                    <div className="col conten">
                                        <h2 style={{ fontWeight: 500, fontSize: '26px', lineHeight: '31px' }}> Lịch sử mua vé</h2>
                                        <span >Theo dõi và quản lý quá trình lịch sử mua vé của bạn</span>
                                    </div>
                                    <div className="col datve">
                                        <button className="btn_datve">
                                            Đặt Vé
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-6 pt-4">
                                    <div style={{ display: 'flex' }}>
                                        <div className="flex-lsmv">
                                            <label className="label2">Mã vé</label> <br />
                                            <div className="form-outline datetimepicker">
                                                <input type="text" className="input-search item-start form-control" style={{ width: '148px', height:'36px', marginLeft:'-0.2cm'}} placeholder="Nhập mã vé" />
                                            </div>
                                        </div>
                                        <div className="flex-lsmv" style={{paddingLeft:'0.3cm'}}>
                                            <label className="label2">Thời gian</label> <br />
                                            <div className="form-outline datetimepicker">
                                            <DatePicker
                                            selected={selectedDate}
                                            onChange={handleDateChange}
                                            format="DD/MM/YYYY" // Định dạng ngày/tháng/năm đầy đủ
                                            showTimeSelect
                                            timeFormat="HH:mm:ss"
                                            id="datepicker"
                                            style={{ width: '148px', height:'36px', marginRight:'-0.2cm' }}
                                            picker="date"
                                          />               
                                            </div>
                                        </div>
                                        <div className="flex-lsmv">
                                            <label className="label2">Tuyến đường</label> <br />
                                            <div className="form-outline datetimepicker">
                                                <input type="text" className="input-search item-start form-control" style={{ width: '148px', height:'36px' }} />
                                            </div>
                                        </div>
                                        <div className="flex-lsmv">
                                            <label className="label2">Trạng thái</label> <br />
                                            <select className="input-search item-start form-control" style={{  width: '148px', height:'36px' }}>
                                                <option value="" disabled selected hidden style={{ color: '#bca8a8 !important' }}></option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="tim-lsmv" style={{ marginTop:'20px',paddingLeft:'40px'}}>
                                        <button type="submit" className="mt-1" >
                                            <span> Tìm</span>
                                        </button>
                                    </div>
                                </div>
                                <div style={{ paddingTop: '25px' }}>
                                    <table style={{ tableLayout: 'fixed' }}>
                                        <colgroup>
                                            <col style={{ width: '140.137px' }} />
                                            <col style={{ width: '116.787px' }} />
                                            <col style={{ width: '291.962px' }} />
                                            <col style={{ width: '140.137px' }} />
                                            <col style={{ width: '140.175px' }} />
                                            <col style={{ width: '8px' }} />
                                        </colgroup>
                                        <thead className="ant-table-thead">
                                            <tr>
                                                <th className="ant-table-cell text-center">Mã giao dịch</th>
                                                <th className="ant-table-cell text-center">Số tiền</th>
                                                <th className="ant-table-cell text-center">Nội dung</th>
                                                <th className="ant-table-cell text-center">Thời gian</th>
                                                <th className="ant-table-cell text-center">Trạng thái</th>
                                                <th className="ant-table-cell ant-table-cell-scrollbar"></th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div className="ant-table-body" style={{ overflowY: 'scroll', maxHeight: '400px', border: '#111111' }}>
                                    <div className="ant-empty">
                                        <i className="fa-solid fa-database" style={{ fontSize: '30px', color: '#bca8a8', paddingTop: '100px' }}></i>
                                        <div>No Data</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lichsimuave;
