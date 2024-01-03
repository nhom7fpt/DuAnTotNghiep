package fpt.mailinhapp.adminController;

import fpt.mailinhapp.dto.NhaXeDto;
import fpt.mailinhapp.service.MapValidationErrorService;
import fpt.mailinhapp.service.NhaXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/nhaXe")
public class NhaXeController {
    @Autowired
    NhaXeService service;
    @Autowired
    MapValidationErrorService errorService;

    @GetMapping
    public ResponseEntity getList(){
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity insertNhaXe(@Validated @RequestBody NhaXeDto dto, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }

        var saveEntity = service.saveNhaXe(dto);

        return new ResponseEntity<>(saveEntity, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity updateNhaXe(@PathVariable Long id,@Validated @RequestBody NhaXeDto dto, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }

        var saveEntity = service.updateNhaXe(id, dto);

        return new ResponseEntity<>(saveEntity, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteNhaXe(@PathVariable Long id){
        service.deleteNhaXe(id);
        return new ResponseEntity<>("Xóa thành công", HttpStatus.OK);
    }
}
