package fpt.mailinhapp.clientController;

import fpt.mailinhapp.dto.ChuyenXeDto;
import fpt.mailinhapp.respondata.ChoDto;
import fpt.mailinhapp.respondata.ChuyenTheoTuyen;
import fpt.mailinhapp.respondata.ReqTimMotChieu;
import fpt.mailinhapp.respondata.Return2List;
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
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

        if(error != null) {
            return error;
        }
        List<ChuyenXeDto> dto = service.timChuyen(data.getDiemDi(), data.getDiemDen());
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PostMapping("return")
    public ResponseEntity findReturnTicket(@Validated @RequestBody ReqTimMotChieu data, BindingResult result) {
        ResponseEntity error = errorService.mapValidationField(result);

        if (error != null) {
            return error;
        }
        var list1 = service.timChuyen(data.getDiemDi(),  data.getDiemDen());
        var list2 = service.timChuyen(data.getDiemDen(), data.getDiemDi());
        Return2List map = new Return2List(list1,list2);

        return new ResponseEntity<>(map, HttpStatus.OK);

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
        if(dto.getNgayDi() == null){
            Date now = new Date();
            dto.setNgayDi(now);
        }
        var data = service.getCho(dto.getId(),dto.getNgayDi());
        var data2 = service.getCho2(dto.getId(),dto.getNgayDi());
        var listData = Stream.concat(data.stream(), data2.stream()).collect(Collectors.toList());



        return new ResponseEntity<>(listData, HttpStatus.OK);
    }

    @PostMapping("/cho2")
    public ResponseEntity getListCho2(@RequestBody ChoDto dto){
        System.out.println(dto.getId());
        if(dto.getNgayDi() == null){
            Date now = new Date();
            dto.setNgayDi(now);
        }
        var data = service.getCho2(dto.getId(),dto.getNgayDi());
        var data2 = service.getCho(dto.getId(),dto.getNgayDi());
        var listData = Stream.concat(data.stream(), data2.stream()).collect(Collectors.toList());

        return new ResponseEntity<>(listData, HttpStatus.OK);
    }

    @GetMapping("/soghe/{id}")
    public ResponseEntity getSoCho(@PathVariable String id){
        var xe = carService.findById(id);
        return new ResponseEntity(xe.getLoaiXe().getSoGhe(),HttpStatus.OK);
    }

}

