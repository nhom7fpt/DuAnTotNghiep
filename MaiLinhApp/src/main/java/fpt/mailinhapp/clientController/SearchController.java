package fpt.mailinhapp.clientController;

import fpt.mailinhapp.dto.ChuyenXeDto;
import fpt.mailinhapp.respondata.ChoDto;
import fpt.mailinhapp.respondata.ChuyenTheoTuyen;
import fpt.mailinhapp.respondata.ReqTimMotChieu;
import fpt.mailinhapp.service.CarService;
import fpt.mailinhapp.service.ChuyenXeService;
import fpt.mailinhapp.service.MapValidationErrorService;
import fpt.mailinhapp.service.TuyenXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v2/search")
public class SearchController {
    @Autowired
    ChuyenXeService service;

    @Autowired
    TuyenXeService tuyenXeService;
    @Autowired
    MapValidationErrorService errorService;
    @Autowired
    CarService carService;
    @PostMapping("one-way")
    public ResponseEntity findOneWayTicket(@Validated @RequestBody ReqTimMotChieu data, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }
        LocalDate ngayDi = (data.getNgayDi() != null) ? data.getNgayDi() : LocalDate.now();
        List<ChuyenXeDto> dto = service.timChuyen(data.getDiemDi(), data.getDiemDen(), ngayDi);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PostMapping("return")
    public ResponseEntity<Map<String, List<ChuyenXeDto>>> findReturnTicket(@Validated @RequestBody ReqTimMotChieu data, BindingResult result) {
        ResponseEntity error = errorService.mapValidationField(result);

        if (error != null) {
            return error;
        }

        LocalDate ngayDi = data.getNgayDi();
        LocalDate ngayVe = data.getNgayVe();

        try {
            Map<String, List<ChuyenXeDto>> resultDto = service.timChuyen2(data.getDiemDi(), data.getDiemDen(), ngayDi, ngayVe);

            return new ResponseEntity<>(resultDto, HttpStatus.OK);
        } catch (Exception e) {

            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping
    public ResponseEntity loadLocation(){
        var data = tuyenXeService.loadLocation();
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    @PostMapping("findbuses")
    public ResponseEntity findByBuses(@Validated @RequestBody ChuyenTheoTuyen dto, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }
        var list = service.findByTuyen(dto);

        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    @PostMapping("/cho")
    public ResponseEntity getListCho(@RequestBody ChoDto dto){
        System.out.println(dto.getId());
        if(dto.getNgayDi() == null){
            Date now = new Date();
            dto.setNgayDi(now);
        }
        var data = service.getCho(dto.getId(),dto.getNgayDi());

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @GetMapping("/soghe/{id}")
    public ResponseEntity getSoCho(@PathVariable String id){
        var xe = carService.findById(id);
        return new ResponseEntity(xe.getLoaiXe().getSoGhe(),HttpStatus.OK);
    }

}
