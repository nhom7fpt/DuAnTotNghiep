package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.DatVe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface DatVeRepository extends JpaRepository<DatVe, Long> {
    @Query(value = "select sum(d.tongTien) from DatVe d " +
            "WHERE MONTH (d.ngayDatVe) between ?1 and ?2 and year =?3 ",nativeQuery = true)
    Long doanhThuTheoQuy(int month1, int month2, int year);
    @Query(value = "select count(VeXeChiTiet )  from DatVe d " +
            "WHERE DATE (d.ngayDatVe) between 1 and 30 " +
            "and MONTH (d.ngayDatVe)=?" +
            "and Year (d.ngayDatve)=?",nativeQuery = true)
    Long thongKeTheoThang(int month,int year);
    @Query(value = "select count (VeXeChiTiet ) from DatVe d " +
            "WHERE YEAR (d.ngayDatVe) = ?1", nativeQuery = true)
    Long thongKeTheoNam(int year);

}