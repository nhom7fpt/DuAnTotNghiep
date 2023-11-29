package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.VeXeChiTiet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface VeXeChiTietRepository extends JpaRepository<VeXeChiTiet, Long> {
    List<VeXeChiTiet> findByDatVe_MaVe(Long maVe);
}