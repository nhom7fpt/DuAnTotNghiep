package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.DatVe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface DatVeRepository extends JpaRepository<DatVe, Long> {
    List<DatVe> findByInfo_SoDTLike(String soDT);

    List<DatVe> findByChuyenXe_MaChuyenAndNgayDiOrNgayVe(Long maChuyen, Date ngayDi, Date ngayVe);



    @Query("select month(dv.ngayDatVe) as thang, sum(dv.tongTien) as tongTien from DatVe dv where year(dv.ngayDatVe) = :nam group by month(dv.ngayDatVe), year(dv.ngayDatVe) order by month(dv.ngayDatVe), year(dv.ngayDatVe)" )
    List<Object[]> thongKeTheoThang(@Param("nam") int nam);

    @Query("select month(dv.ngayDatVe) as thang, sum(dv.soLuong) as tongTien from DatVe dv where year(dv.ngayDatVe) = :nam group by month(dv.ngayDatVe), year(dv.ngayDatVe) order by month(dv.ngayDatVe), year(dv.ngayDatVe)" )
    List<Object[]> thongKeVe(@Param("nam") int nam);

}