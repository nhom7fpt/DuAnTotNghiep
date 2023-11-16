package fpt.mailinhapp.clientController;

import fpt.mailinhapp.domain.VaiTro;
import fpt.mailinhapp.dto.TaiKhoanDto;
import fpt.mailinhapp.dto.ThanhVienDto;
import fpt.mailinhapp.service.CustomerService;
import fpt.mailinhapp.service.MapValidationErrorService;
import fpt.mailinhapp.service.TaiKhoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v2/acc")
@CrossOrigin
public class AccountCLController {
    @Autowired
    TaiKhoanService service;
    @Autowired
    MapValidationErrorService errorService;
    @Autowired
    CustomerService customerService;

    @PostMapping("reg")
    public ResponseEntity createAcc(@Validated @RequestBody TaiKhoanDto dto, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }
        dto.setVaiTro(VaiTro.ThanhVien);
        var newDto = service.insertAccount(dto);

        ThanhVienDto tvDto = new ThanhVienDto();
        tvDto.setTaiKhoan(dto);
        tvDto.setSoDT(dto.getTenTaiKhoan());
        customerService.insertCustomers(tvDto);

        return new ResponseEntity<>(newDto, HttpStatus.CREATED);
    }
    @PostMapping
    public ResponseEntity loginAcc(@Validated @RequestBody TaiKhoanDto dto, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }
        var newDto = service.CheckLogin(dto);

        return new ResponseEntity<>(newDto,HttpStatus.ACCEPTED);
    }
}
