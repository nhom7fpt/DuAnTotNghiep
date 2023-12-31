
import React, { useState, useEffect } from 'react';
import '../css/lichsumuave.css';
import { DatePicker, Table } from 'antd';
import 'antd/dist/antd.css';
import Menudangnhap from '../components/menudangnhap';
import SearchService from '../services/SearchService';
import OrderhistoryService from '../services/OrderhistoryService';
import { connect } from 'react-redux';
import { orderhistory } from '../redux/actions/actionOrderhistory';
import withRouter from '../helpers/withRouter';

function Lichsimuave(props) {
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const user = localStorage.getItem('username');
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const loadNewData = async () => {
    setLoading(true);

    try {
      const service = new SearchService();
      const tuyenRes = await service.loadDataTuyen();
      const listTuyen = tuyenRes.data;

      const layThongTinTuyenXe = (chuyenXe) => {
        if (chuyenXe && chuyenXe.tuyenXe) {
          const maTuyenXe = chuyenXe.tuyenXe;
          const tuyenXe = listTuyen.find((t) => t.maTuyenXe === maTuyenXe);

          ///Sử dụng hàm find để tìm kiếm tuyến xe trong danh sách listTuyen dựa trên điều kiện t.maTuyenXe === maTuyenXe.
          //Nếu tìm thấy, tuyenXe sẽ chứa thông tin về tuyến xe.

          if (tuyenXe) {
            return `${tuyenXe.diemDi} - ${tuyenXe.diemDen} (${tuyenXe.tgDi})`;
          }
        }

        return '';
      };

      if (props.listData && props.listData.length > 0) {
        // Sử dụng dữ liệu từ Redux state nếu có
        const newListData = props.listData.map((i) => ({
          thanhToan: i.thanhToan.id,
          soLuong: i.soLuong,
          tongTien: i.tongTien,
          trangThai: i.thanhToan && i.thanhToan.status ? 'Thành công' : 'Không thành công',
          noiDung: layThongTinTuyenXe(i.chuyenXe),
          ngayDatVe: i.ngayDatVe,
        }));

        newListData.sort((a, b) => b.thanhToan - a.thanhToan);

        setData(newListData);
        setLoading(false);
      } else {
        // Gọi trực tiếp nếu không có dữ liệu trong Redux state
      
        const service1 = new OrderhistoryService();
        const res = await service1.ListByAccount(user);

        if (res.status === 200) {
          const newListData = res.data.map((i) => ({
            thanhToan: i.thanhToan.id,
            soLuong: i.soLuong,
            tongTien: i.tongTien,
            trangThai: i.thanhToan && i.thanhToan.status ? 'Thành công' : 'Không thành công',
            noiDung: layThongTinTuyenXe(i.chuyenXe),
            ngayDatVe: i.ngayDatVe,
          }));

          newListData.sort((a, b) => b.thanhToan - a.thanhToan);

          setData(newListData);
        }
      }
    } catch (error) {
      // Xử lý lỗi nếu cần
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'Mã giao dịch',
      dataIndex: 'thanhToan',
      key: 'thanhToan',
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
      render: (text, record) => <span>{record.ngayDatVe ? formatDate(record.ngayDatVe) : ''}</span>,
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
    showLessItems: true, 
  };
  

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  useEffect(() => {
    // Gọi action orderhistory để cập nhật dữ liệu trong Redux state
    props.orderhistory(user);

    // Load dữ liệu mới dựa trên selectedDate
    loadNewData();
  }, [selectedDate, props.listData]);

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

                <div style={{ paddingTop: '25px' }}>
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={paginationConfig}
                    onChange={handleTableChange}
                    loading={loading}
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