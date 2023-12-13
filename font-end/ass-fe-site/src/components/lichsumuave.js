import React, { useState,useEffect } from 'react';
import '../css/lichsumuave.css';
import { DatePicker, Input, Button, Select, Table, Empty } from 'antd';
import 'antd/dist/antd.css';
import Menudangnhap from '../components/menudangnhap';
import { connect } from 'react-redux';
import withRouter from '../helpers/withRouter';
import { orderhistory } from '../redux/actions/actionOrderhistory';
import SearchService from '../services/SearchService';

const { Option } = Select;

function Lichsimuave(props) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const user = localStorage.getItem("username");
    
    const listData = props.listData || [];

   const loadNewData =async ()=>{
    const service = new SearchService();
    const tuyenRes = await service.loadDataTuyen();
    const listTuyen = tuyenRes.data;
    if(listData){
        const newListData = listData.map(i=>{
            const tuyen = listTuyen.find(t=>t.maTuyenXe === i.chuyenXe.tuyenXe);
          
            return ({
                key: i.maVe,
                maVe: i.maVe,
                soLuong: i.soLuong,
                tongTien: i.tongTien,
                noiDung: `${tuyen.diemDi} - ${tuyen.diemDen} (${tuyen.tgDi})`,
                ngayDatVe: i.ngayDatVe
            })
        });

        setData(newListData);
    }
   }
    
    // const data = listData.map(item => ({
    //     ...item,
    //     soLuong: item.soLuong,
    //     tongTien: item.tongTien,
    // }));
    const columns = [
        {
            title: 'Mã giao dịch',
            dataIndex: 'maVe',
            key: 'maVe',
            align: 'center',
        },
        {
            title: 'Số lượng',
            dataIndex: 'soLuong',
            key: 'soLuong',
            align: 'center',
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'tongTien',
            key: 'tongTien',
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
            dataIndex: 'ngayDatVe',
            key: 'ngayDatVe',
            align: 'center',
            render: (text, record) => (
                <span>{record.ngayDatVe ? formatDate(record.ngayDatVe) : ''}</span>
              ),
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
        total: listData.length,
        showSizeChanger: false,

    };
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
      };
    const paginatedData = listData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    useEffect(() => {
        props.orderhistory(user);
      
    },[]);

    useEffect(() => {
        loadNewData();
      
    },[]);

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


const mapStateToProps = (state) => ({
    listData: state.Oderhistory.listData,
  });
  
  const mapDispatchToProps = {
    orderhistory
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Lichsimuave));
  