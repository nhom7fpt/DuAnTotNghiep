import React,{useEffect,useState} from 'react';
import './dvtc.css'; 
import { format } from 'date-fns';
import Diamdiem from'./diadiem.js';
import Huongdan from'./huongdandvtc.js';
import Titledvtc from'./titledvtc.js';
import { useParams } from 'react-router-dom';
import { gethistory } from '../../redux/actions/actionOrderhistory';
import { connect } from 'react-redux';
import withRouter from '../../helpers/withRouter.js';
import OrderhistoryService from '../../services/OrderhistoryService.jsx';
import SearchService from '../../services/SearchService.jsx';
function Datvethanhcong  (props){
  const { id } = useParams();
  const { listData } = props;
  const [data2, setData2] = useState(null);
  const [tuyenXeInfo, setTuyenXeInfo] = useState('');
  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const service = new OrderhistoryService();
        const res = await service.ByMaThanhToan(id);
        res && res.data && setData2(res.data);
        const service1 = new SearchService();
        const tuyenRes = await service1.loadDataTuyen();
        const listTuyen = tuyenRes.data;
        const tuyenXe = res.data.chuyenXe && res.data.chuyenXe.tuyenXe;
        const tuyenXeInfo = layThongTinTuyenXe(tuyenXe, listTuyen);
       
        setTuyenXeInfo(tuyenXeInfo);
      } catch (error) {
        console.log(error);
      }
    };
 
    fetchData();
  }, [id]);

  const layThongTinTuyenXe = (maTuyenXe, listTuyen) => {
    const tuyenXe = listTuyen.find((t) => t.maTuyenXe === maTuyenXe);

    if (tuyenXe) {
      return `${tuyenXe.diemDi} - ${tuyenXe.diemDen} (${tuyenXe.tgDi})`;
    }

    return '';
  };
 
  
console.log(data2);


  return (
    <div className='pagedatvethanhcong'>
     <Titledvtc />
     <Huongdan />
     <Diamdiem />
     <div className="thongtinchuyendi" style={{ marginRight: '5cm', marginTop: '-21cm', width:'317px' }}>
        <article className="card ticket-info">
          <div className="card-header">
            <h5 className="card-title">Thông tin chuyến đi</h5>
          </div>
          <div className="card-body">
            <div className="info-row-dvtc">
              <div>MÃ ĐƠN HÀNG</div>
              <div>{id}</div>
            </div>
            <div className="info-row-dvtc">
              <div>HỌ TÊN</div>
              <div>{data2 && data2.info.hoTen}</div>
            </div>
            <div className="info-row-dvtc">
              <div>SỐ ĐIỆN THOẠI</div>
              <div>{data2 && data2.info.soDT}</div>
            </div>
            <div className="info-row-dvtc">
              <div>EMAIL</div>
              <div>{data2 && data2.info.email}</div>
            </div>
            <div className="info-row-dvtc">
              <div>NHÀ XE</div>
              <div>MaiLinh</div>
            </div>
            <div className="info-row-dvtc">
              <div>TUYẾN ĐƯỜNG</div>
              <div>{tuyenXeInfo}</div>
            </div>
            <div className="info-row-dvtc">
              <div>LOẠI XE</div>
              <div>{data2 && data2.chuyenXe.xedto.loaiXe.tenLoai}</div>
            </div>
            <div className="info-row-dvtc">
            <div>MÃ GHẾ</div>
            <div>
              {data2 &&
                data2.choNgoi &&
                data2.choNgoi.map((ghe, index) => (
                  <span key={index}>
                    {ghe}
                    {index < data2.choNgoi.length - 1 && ', '}
                  </span>
                ))}
            </div>
          </div>
          
          </div>
        </article>
  
        <article className="card transaction-info">
          <div className="card-header">
            <h5 className="card-title">Thông tin giao dịch</h5>
          </div>
          <div className="card-body">
            <section className="info-row-dvtc">
              <div>Phương thức thanh toán</div>
              <div>Online</div>
            </section>
            <section className="info-row-dvtc">
            <div>Ngày đặt</div>
            <div>{data2 && format(new Date(data2.thanhToan.payDate), 'dd/MM/yyyy')}</div>
          </section>
            <section className="info-row-dvtc">
              <div>Trạng thái</div>
              <div>{data2 && data2.thanhToan.status  ? 'Thành công' : 'Thất bại'}</div>
            </section>
            <section className="info-row-dvtc">
              <div>Tổng tiền</div>
             
                  <div style={{ textAlign: 'right', color:'red' }}>   {data2 && new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data2.tongTien)}</div>
                
              
            </section>
          </div>
        </article>
      </div>
    </div>
   
  );
};


export default (withRouter(Datvethanhcong));


