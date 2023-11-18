package fpt.mailinhapp.clientController;

import fpt.mailinhapp.dto.ChuyenXeDto;
import fpt.mailinhapp.service.ChuyenXeService;
import fpt.mailinhapp.service.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v2/chuyenxe")
public class ChuyenXeCLController {
    @Autowired
     private ChuyenXeService service;
    @Autowired
    private MapValidationErrorService errorService;
    @GetMapping
    public ResponseEntity<> getList(){
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);

    }
@PostMapping
public ResponseEntity<ChuyenXeDto> insertChuyenXe(@Validated @RequestBody ChuyenXeDto chuyenXeDto, BindingResult result) {
    ResponseEntity error = errorService.mapValidationField(result);
    if (error != null) {
        return error;
    }
    var seveDto = service.instertChuyenXe(chuyenXeDto);
    return new ResponseEntity<>(seveDto, HttpStatus.CREATED);
}

    @PatchMapping("/{id}")
    public ResponseEntity<ChuyenXeDto> updateChuyenXe(@PathVariable Long id, @Validated @RequestBody ChuyenXeDto chuyenXeDto, BindingResult result) {
        ResponseEntity error = errorService.mapValidationField(result);
        if (error != null) {
            return error;
        }
        ChuyenXeDto updatedChuyenXe = service.updateChuyenXe(id, chuyenXeDto);
        return new ResponseEntity<>(updatedChuyenXe, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteChuyenXe(@PathVariable Long id) {
        service.deleteChuyen(id);
        return new ResponseEntity<>("ChuyenXe with ID " + id + " deleted successfully.", HttpStatus.OK);
    }

}
