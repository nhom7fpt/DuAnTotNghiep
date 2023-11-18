package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.HopDong;
import fpt.mailinhapp.repository.HopDongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HopDongService {

    @Autowired
    private HopDongRepository hopDongRepository;
    public List<HopDong> getAllHopDongs() {
        return (List<HopDong>) hopDongRepository.findAll();
    }
    public Optional<HopDong> getHopDongById(int id) {
        return hopDongRepository.findById(id);
    }
    public HopDong saveHopDong(HopDong hopDong) {
        return hopDongRepository.save(hopDong);
    }
    public void deleteHopDong(int id) {
        hopDongRepository.deleteById(id);
    }
    public HopDong updateHopDong(int id, HopDong newHopDong) {
        Optional<HopDong> existingHopDong = hopDongRepository.findById(id);

        if (existingHopDong.isPresent()) {

            HopDong updatedHopDong = existingHopDong.get();
            updatedHopDong.getMaHopDong();
            return hopDongRepository.save(updatedHopDong);
        } else {
            throw new RuntimeException("Không tìm thấy hợp đồng có ID: " + id);
        }
    }
}

