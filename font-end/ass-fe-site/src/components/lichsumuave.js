import React, { useState } from 'react';
import '../css/lichsumuave.css';
import { DatePicker, Input, Button, Select, Table, Empty } from 'antd';
import 'antd/dist/antd.css';
import Menudangnhap from '../components/menudangnhap';

const { Option } = Select;

function Lichsimuave() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const data = [
        {
            key: '1',
            maGiaoDich: 'GD001',
            soTien: '1000000 VND',
            noiDung: 'Mua vé đi Hà Nội',
            thoiGian: '2023-01-01 10:00',
            trangThai: 'Đã thanh toán',
        },
        {
            key: '2',
            maGiaoDich: 'GD002',
            soTien: '800000 VND',
            noiDung: 'Mua vé đi Hồ Chí Minh',
            thoiGian: '2023-02-15 15:30',
            trangThai: 'Chưa thanh toán',
        },
        {
            key: '3',
            maGiaoDich: 'GD003',
            soTien: '1200000 VND',
            noiDung: 'Mua vé đi Đà Nẵng',
            thoiGian: '2023-03-20 08:45',
            trangThai: 'Đã thanh toán',
        },
        {
            key: '4',
            maGiaoDich: 'GD004',
            soTien: '1000000 VND',
            noiDung: 'Mua vé đi Hà Nội',
            thoiGian: '2023-01-01 10:00',
            trangThai: 'Đã thanh toán',
        },
        {
            key: '5',
            maGiaoDich: 'GD005',
            soTien: '800000 VND',
            noiDung: 'Mua vé đi Hồ Chí Minh',
            thoiGian: '2023-02-15 15:30',
            trangThai: 'Chưa thanh toán',
        },
        {
            key: '6',
            maGiaoDich: 'GD006',
            soTien: '1200000 VND',
            noiDung: 'Mua vé đi Đà Nẵng',
            thoiGian: '2023-03-20 08:45',
            trangThai: 'Đã thanh toán',
        },
    ];

    const columns = [
        {
            title: 'Mã giao dịch',
            dataIndex: 'maGiaoDich',
            key: 'maGiaoDich',
            align: 'center',
        },
        {
            title: 'Số tiền',
            dataIndex: 'soTien',
            key: 'soTien',
            align: 'center',
        },
        {
            title: 'Nội dung',
            dataIndex: 'noiDung',
            key: 'noiDung',
            align: 'center',
        },
        {
            title: 'Thời gian',
            dataIndex: 'thoiGian',
            key: 'thoiGian',
            align: 'center',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'trangThai',
            key: 'trangThai',
            align: 'center',
        },
    ];
    const handleTableChange = (pagination) => {
        setCurrentPage(pagination.current);
        setPageSize(pagination.pageSize);
    };

    const paginationConfig = {
        pageSize: pageSize,
        current: currentPage,
        total: data.length,
        showSizeChanger: false,

    };

    const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <div className="border">
            <div className="" style={{ height: '600px' }}>
                <div className="mr-1 p-3 mr-0 p-0">
                    <div className="grid grid-col-12 gap-0 gap-8">
                        <Menudangnhap />
                        <div className="col-span-9 mt-6" style={{ marginLeft: '12cm', marginTop: '1cm' }}>
                            <div>
                                <div className="row" style={{ height: '100px', display: 'flex' }}>
                                    <div className="col conten">
                                        <h2 style={{ fontWeight: 500, fontSize: '26px', lineHeight: '31px' }}> Lịch sử mua vé</h2>
                                        <span>Theo dõi và quản lý quá trình lịch sử mua vé của bạn</span>
                                    </div>
                                    <div className="col datve">
                                        <Button className="btn_datve">Đặt Vé</Button>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-6 pt-4">
                                    <div style={{ display: 'flex' }}>
                                        <div className="flex-lsmv">
                                            <label className="label2">Mã vé</label> <br />
                                            <Input style={{ width: '146px', height: '36px', marginLeft: '-0.2cm' }} placeholder="Nhập mã vé" />
                                        </div>
                                        <div className="flex-lsmv" style={{ paddingLeft: '0.3cm' }}>
                                            <label className="label2">Thời gian</label> <br />
                                            <DatePicker
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                format="DD/MM/YYYY"
                                                showTime
                                                className='thoigian-dv'
                                              
                                            />
                                        </div>
                                        <div className="flex-lsmv">
                                            <label className="label2">Tuyến đường</label> <br />
                                            <Input  className='thoigian-dv'/>
                                        </div>
                                        <div className="flex-lsmv">
                                        <label className="label2">Trạng thái</label> <br />
                                        <select className="input-search-lsmv item-start form-control" style={{  width: '148px', height:'36px' }}>
                                            <option value="" disabled selected hidden style={{ color: '#bca8a8 !important' }}></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                               
                                    </div>
                                    <div className="" style={{ marginTop: '20px', paddingLeft: '40px' }}>
                                        <Button type="submit" className="tim-lsmv">
                                            <span> Tìm</span>
                                        </Button>
                                    </div>
                                </div>
                                <div style={{ paddingTop: '25px' }}>
                                    <Table columns={columns} dataSource={data}  
                                   
                                    pagination={paginationConfig}
                                    
                                    onChange={handleTableChange}
                                    />
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
