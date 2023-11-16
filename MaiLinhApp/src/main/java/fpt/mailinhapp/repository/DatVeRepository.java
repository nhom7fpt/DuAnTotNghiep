package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.DatVe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface DatVeRepository extends JpaRepository<DatVe, Long> {
}