package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.ChuyenXe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface ChuyenXeRepository extends JpaRepository<ChuyenXe, Long> {
    List<ChuyenXe> findByTuyenXe_DiemDiLikeAndTuyenXe_DiemDenLike(String diemDi, String diemDen);
}