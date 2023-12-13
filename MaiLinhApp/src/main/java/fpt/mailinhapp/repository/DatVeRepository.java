package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.DatVe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DatVeRepository extends JpaRepository<DatVe, Long> {
    List<DatVe> findByInfo_SoDTLike(String soDT);
}