import React from 'react'; 
import { connect } from 'react-redux';
import withRouter from '../../helpers/withRouter';
import { useLocation, useParams } from 'react-router-dom';
function Thongtinchuyendi (props) {
  const { custom,tongTien  } = props;
  const hoTen = localStorage.getItem("hoTen");
  const soDT = localStorage.getItem("soDT");
  const email = localStorage.getItem("email");
  const { search } = useLocation();

  const params = new URLSearchParams(search);

  const id = params.get('id');
 
  return (
    <div className='pagedatvethanhcong'>
    <div className="thongtinchuyendi" style={{ marginRight: '5cm', marginTop: '-28.5cm', width:'317px' }}>
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
      <div>{hoTen}</div>
    </div>
    <div className="info-row-dvtc">
      <div>SỐ ĐIỆN THOẠI</div>
      <div>{soDT}</div>
    </div>
    <div className="info-row-dvtc">
      <div >SỐ CMND/CCCD</div>
      <div></div>
    </div>
    <div className="info-row-dvtc">
      <div>EMAIL</div>
      <div >{email}</div>
    </div>
    <div className="info-row-dvtc">
      <div>NHÀ XE</div>
      <div>Phượng Thu</div>
    </div>
    <div className="info-row-dvtc">
      <div>TUYẾN ĐƯỜNG</div>
      <div>Đà Nẵng - Kon Tum</div>
    </div>
    <div className="info-row-dvtc">
      <div>LOẠI XE</div>
      <div>Giường nằm 44 chỗ</div>
    </div>
    <div className="info-row-dvtc" >
      <div>MÃ GHẾ</div>
      <div >B3</div>
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
          <div>Thẻ thanh toán quốc tế</div>
        </section>
        <section className="info-row-dvtc">
          <div>Trạng thái</div>
          <div>Đặt chỗ thành công</div>
        </section>
        <section className="info-row-dvtc">
          <div>Giá vé</div>
          <div style={{ marginTop: '-1cm' }}>
            <div style={{ height: '50px' }}>
              <div style={{ textAlign: 'right' }}>1 x 250.000 ₫</div>
              <div style={{ color: 'rgb(77, 77, 77)', textAlign: 'right' }}>Giường B3</div>
            </div>
          </div>
        </section>
        <section className="info-row-dvtc">
          <div style={{ fontSize: '14px', color: 'black' }}>Tổng tiền</div>
          <div style={{ fontSize: '14px', color: '#000' }}>{ }</div>
        </section>
      </div>
    </article>
  </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  custom: state.CustomReducer.custom,
});

export default connect(mapStateToProps)(withRouter(Thongtinchuyendi));
