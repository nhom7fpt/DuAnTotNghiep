package fpt.mailinhapp.adminController;

import fpt.mailinhapp.domain.ThuongHieu;
import fpt.mailinhapp.dto.ThuongHieuDto;
import fpt.mailinhapp.service.MapValidationErrorService;
import fpt.mailinhapp.service.ThuongHieuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/thuonghieu")
@CrossOrigin
public class ThuongHieuController {
    @Autowired
    private ThuongHieuService thuongHieuService;
    @Autowired
    MapValidationErrorService errorService;

    @GetMapping
    public ResponseEntity<List<ThuongHieu>> getAllThuongHieu(){
        List<ThuongHieu> thuongHieuList = thuongHieuService.getAllThuongHieu();
        return new ResponseEntity<>(thuongHieuList, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ThuongHieuDto> createThuongHieu(@Validated @RequestBody ThuongHieuDto dto, BindingResult result) {
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }

        var createdDto = thuongHieuService.createThuongHieu(dto);
        return new ResponseEntity<>(createdDto, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ThuongHieuDto> updateThuongHieu(@PathVariable Long id, @Validated @RequestBody ThuongHieuDto dto, BindingResult result) {
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }

        ThuongHieuDto updatedDto = thuongHieuService.updateThuongHieu(id, dto);
        return new ResponseEntity<>(updatedDto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteThuongHieu(@PathVariable Long id){
        thuongHieuService.deleteThuongHieu(id);
        return new ResponseEntity<>("Đã xóa thương hiệu có ID: " + id, HttpStatus.OK);
    }
}
