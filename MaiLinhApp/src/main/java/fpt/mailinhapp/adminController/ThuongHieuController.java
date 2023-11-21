package fpt.mailinhapp.adminController;

import fpt.mailinhapp.dto.ThuongHieuDto;
import fpt.mailinhapp.service.MapValidationErrorService;
import fpt.mailinhapp.service.ThuongHieuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/thuonghieu")
public class ThuongHieuController {
    @Autowired
    ThuongHieuService service;
    @Autowired
    MapValidationErrorService errorService;

    @GetMapping
    public ResponseEntity getList(){
        return new ResponseEntity<>(service.getlist(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity insterThuongHieu(@Validated @RequestBody ThuongHieuDto dto, BindingResult result){
        ResponseEntity eror = errorService.mapValidationField(result);

        if(eror != null){
            return eror;
        }
        var saveDto = service.íntertThuongHieu(dto);

        return new ResponseEntity<>(saveDto,HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity updateThuongHieu(@PathVariable Long id, @Validated @RequestBody ThuongHieuDto dto, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }

        var updateDto = service.updateThuongHieu(id,dto);

        return new ResponseEntity<>(updateDto, HttpStatus.OK);
    }

    @DeleteMapping()
    public ResponseEntity deleteThuongHieu(Long id){
        service.deleteThuongHieu(id);
        return new ResponseEntity<>("Xoá thành công ", HttpStatus.OK);
    }
}

