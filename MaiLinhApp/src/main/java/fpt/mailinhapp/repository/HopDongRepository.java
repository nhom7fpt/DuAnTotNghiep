package fpt.mailinhapp.repository;

import fpt.mailinhapp.domain.HopDong;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface HopDongRepository extends JpaRepository<HopDong, Integer> {

}