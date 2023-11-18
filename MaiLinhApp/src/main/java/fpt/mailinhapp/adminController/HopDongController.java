package fpt.mailinhapp.adminController;

import fpt.mailinhapp.domain.HopDong;
import fpt.mailinhapp.service.HopDongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hopdongs")
public class HopDongController {

    @Autowired
    private HopDongService hopDongService;


    @GetMapping
    public List<HopDong> getAllHopDongs() {
        return hopDongService.getAllHopDongs();
    }


    @GetMapping("/{id}")
    public HopDong getHopDongById(@PathVariable int id) {
        return hopDongService.getHopDongById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy hợp đồng có ID: " + id));
    }


    @PostMapping
    public HopDong createHopDong(@RequestBody HopDong hopDong) {
        return hopDongService.saveHopDong(hopDong);
    }


    @PutMapping("/{id}")
    public HopDong updateHopDong(@PathVariable int id, @RequestBody HopDong newHopDong) {
        return hopDongService.updateHopDong(id, newHopDong);
    }


    @DeleteMapping("/{id}")
    public void deleteHopDong(@PathVariable int id) {
        hopDongService.deleteHopDong(id);
    }


}

