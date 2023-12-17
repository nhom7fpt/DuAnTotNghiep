package fpt.mailinhapp.clientController;

import fpt.mailinhapp.dto.DatVeDto;
import fpt.mailinhapp.dto.TaiKhoanDto;

import fpt.mailinhapp.exception.TicketsException;
import fpt.mailinhapp.service.VeXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v2/vexe")
public class LichsudatveController {
    @Autowired
    private VeXeService veXeService;

//    @GetMapping("/find/{id}")
//    public ResponseEntity<List<VeXeChiTietDto>> findVeXeById(@PathVariable Long id) {
//        try {
//            List<VeXeChiTietDto> veXeChiTietDtos = veXeService.findById(id);
//            return new ResponseEntity<>(veXeChiTietDtos, HttpStatus.OK);
//        } catch (TicketsException e) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

    @GetMapping("/findbyaccount/{id}")
    public ResponseEntity<List<DatVeDto>> findVeXeByAccount(@PathVariable String id) {
        try {
            List<DatVeDto> datVeDtos = veXeService.findBysoDT(id);
            return new ResponseEntity<>(datVeDtos, HttpStatus.OK);
        } catch (TicketsException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

//    @GetMapping("/getByMaVe/{maVe}")
//    public ResponseEntity<?> getDatVeByMaVe(@PathVariable Long maVe) {
//        try {
//            DatVeDto datVeDto = veXeService.getDatVeByMaVe(maVe);
//            return ResponseEntity.ok(datVeDto);
//        } catch (TicketsException e) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Đã xảy ra lỗi");
//        }
//    }
    @GetMapping("/getByMaThanhToan/{thanhToanId}")
    public ResponseEntity<?> getDatVeByThanhToanId(@PathVariable String thanhToanId) {
        try {
            DatVeDto datVeDto = veXeService.getDatVeByThanhToanId(thanhToanId);
            return new ResponseEntity<>(datVeDto, HttpStatus.OK);
        } catch (TicketsException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>("Đã xảy ra lỗi không mong muốn", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
