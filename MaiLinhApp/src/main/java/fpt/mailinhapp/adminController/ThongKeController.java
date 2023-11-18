package fpt.mailinhapp.adminController;

import fpt.mailinhapp.service.ThongKeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v2/thongke")
public class ThongKeController {
    @Autowired
    ThongKeService service;
    @GetMapping("quy")
    public ResponseEntity getDataQuy(){
        return new ResponseEntity<>(service.ThongKeTheoQuy(), HttpStatus.OK);
    }
    @PostMapping("thang")
    public ResponseEntity getDataThang(@PathVariable int month, @PathVariable int year){
        return new ResponseEntity<>(service.ThongKeTheoThang(month, year), HttpStatus.OK);
    }
    @PostMapping("nam")
    public ResponseEntity getDataNam(@PathVariable int year ){
        return new ResponseEntity<>(service.ThongKeTheoNam(year), HttpStatus.OK);
    }




}
