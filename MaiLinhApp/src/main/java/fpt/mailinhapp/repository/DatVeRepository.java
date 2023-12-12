package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.DatVe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface DatVeRepository extends JpaRepository<DatVe, Long> {
    List<DatVe> findByTaiKhoan_TenTaiKhoan(String tenTaiKhoan);
}