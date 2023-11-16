package fpt.mailinhapp.adminController;

import fpt.mailinhapp.dto.XeDto;
import fpt.mailinhapp.service.CarService;
import fpt.mailinhapp.service.FileStorageService;
import fpt.mailinhapp.service.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/cars")
public class CarController {
    @Autowired
    CarService service;
    @Autowired
    MapValidationErrorService errorService;

    @GetMapping
    public ResponseEntity getListCars(){
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity insertCar(@Validated @RequestBody XeDto dto, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }
        var saveCar = service.createCar(dto);

        return new ResponseEntity<>(saveCar,HttpStatus.CREATED);
    }

}
