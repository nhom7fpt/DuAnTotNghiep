package fpt.mailinhapp.adminController;

import fpt.mailinhapp.dto.TuyenXeDto;
import fpt.mailinhapp.service.MapValidationErrorService;
import fpt.mailinhapp.service.TuyenXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;

@RestController
@RequestMapping("api/v1/buses")
public class BusesController {
    @Autowired
    TuyenXeService service;

    @Autowired
    MapValidationErrorService errService;

    @GetMapping
    public ResponseEntity fillAll(){
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity insertBuses(@Validated @RequestBody TuyenXeDto dto, BindingResult result){
        ResponseEntity error = errService.mapValidationField(result);

        if(error != null){
            return error;
        }

        System.out.println(dto.getTgDi());

        var saveBuses = service.createBuses(dto);

        return new ResponseEntity<>(saveBuses, HttpStatus.CREATED);
    }

    @PatchMapping("{id}")
    public ResponseEntity updateBuses(@PathVariable Integer id, @Validated @RequestBody TuyenXeDto dto,
                                      BindingResult result){
        ResponseEntity error = errService.mapValidationField(result);

        if(error != null){
            return error;
        }

        var saveBuses = service.updateBuses(id,dto);

        return new ResponseEntity<>(saveBuses, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteBuses(@PathVariable Integer id){
        service.deleteBuses(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
