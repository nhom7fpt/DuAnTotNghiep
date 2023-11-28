package fpt.mailinhapp.clientController;

import fpt.mailinhapp.dto.ChuyenXeDto;
import fpt.mailinhapp.respondata.ChuyenTheoTuyen;
import fpt.mailinhapp.respondata.ReqTimMotChieu;
import fpt.mailinhapp.respondata.Return2List;
import fpt.mailinhapp.service.ChuyenXeService;
import fpt.mailinhapp.service.MapValidationErrorService;
import fpt.mailinhapp.service.TuyenXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v2/search")
public class SearchController {
    @Autowired
    ChuyenXeService service;
    @Autowired
    TuyenXeService tuyenXeService;
    @Autowired
    MapValidationErrorService errorService;

    @PostMapping("one-way")
    public ResponseEntity findOneWayTicket(@Validated @RequestBody ReqTimMotChieu data, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }

        List<ChuyenXeDto> dto = service.timChuyen(data.getDiemDi(), data.getDiemDen());

        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PostMapping("return")
    public ResponseEntity findReturnTicket(@Validated @RequestBody ReqTimMotChieu data, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }

        List<ChuyenXeDto> dto = service.timChuyen(data.getDiemDi(), data.getDiemDen());
        List<ChuyenXeDto> dto2 = service.timChuyen(data.getDiemDen(), data.getDiemDi());

        Return2List newList = new Return2List(dto,dto2);

        return new ResponseEntity<>(newList, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity loadLocation(){
        var data = tuyenXeService.loadLocation();
        return new ResponseEntity<>(data,HttpStatus.OK);
    }

<<<<<<< HEAD
=======
    @PostMapping("findbuses")
    public ResponseEntity findByBuses(@Validated @RequestBody ChuyenTheoTuyen dto, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }
        var list = service.findByTuyen(dto);

        return new ResponseEntity<>(list, HttpStatus.OK);
    }
>>>>>>> minh
}
