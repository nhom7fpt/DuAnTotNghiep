package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.VeXeChiTiet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface VeXeChiTietRepository extends JpaRepository<VeXeChiTiet, Long> {
}