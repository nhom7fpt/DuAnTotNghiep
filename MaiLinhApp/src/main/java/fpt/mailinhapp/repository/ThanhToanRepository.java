package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.ThanhToan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ThanhToanRepository extends JpaRepository<ThanhToan, String> {
}