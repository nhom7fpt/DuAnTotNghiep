package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.VeXeChiTiet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface VeXeChiTietRepository extends JpaRepository<VeXeChiTiet, Long> {
    @Query(value = "select count(VeXeChiTiet )  from VeXeChiTiet v inner join DatVe d " +
            "on v.maVe =d.maVe " +
            "WHERE MONTH (d.ngayDatVe) between ? and ?",nativeQuery = true)
    Long thongKeTheoQuy(int month1, int month2);
    @Query(value = "select count(VeXeChiTiet )  from VeXeChiTiet v inner join DatVe d " +
            "on v.maVe =d.maVe " +
            "WHERE DATE (d.ngayDatVe) between 1 and 30 " +
            "and MONTH (d.ngayDatVe)=?" +
            "and Year (d.ngayDatve)=?",nativeQuery = true)
    Long thongKeTheoThang(int month,int year);

    @Query(value = "select count (VeXeChiTiet ) from VeXeChiTiet  v inner join DatVe d " +
            "on v.maVe =d.maVe " +
            "WHERE YEAR (d.ngayDatVe) = ?1", nativeQuery = true)
    Long thongKeTheoNam(int year);




}