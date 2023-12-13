package fpt.mailinhapp.clientController;


import fpt.mailinhapp.dto.DatVeDto;
import fpt.mailinhapp.exception.AccountException;
import fpt.mailinhapp.service.LichSuMuaVeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v2/datve")
public class LichsudatveController {
    @Autowired
    private LichSuMuaVeService lichSuMuaVeService;

    @GetMapping("/{maVe}")
    public ResponseEntity<DatVeDto> findLichSuMuaVeByMaVe(@PathVariable Long maVe) {
        try {
            DatVeDto datVeDto = lichSuMuaVeService.findLichSuMuaVeByMaVe(maVe);
            return new ResponseEntity<>(datVeDto, HttpStatus.OK);
        } catch (AccountException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<DatVeDto>> findAllLichSuMuaVe() {
        List<DatVeDto> datVeDtoList = lichSuMuaVeService.findAllLichSuMuaVe();
        return new ResponseEntity<>(datVeDtoList, HttpStatus.OK);
    }
}
