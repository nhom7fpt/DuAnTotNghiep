package fpt.mailinhapp.adminController;

import fpt.mailinhapp.dto.DatVeDto;
import fpt.mailinhapp.service.MapValidationErrorService;
import fpt.mailinhapp.service.VeXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/tickets")
public class TicketsController {

    @Autowired
    VeXeService service;
    @Autowired
    MapValidationErrorService errorService;

    @GetMapping
    public ResponseEntity getList(){
        return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity insertTickets(@Validated @RequestBody DatVeDto dto, BindingResult result){
        ResponseEntity error = errorService.mapValidationField(result);

        if(error != null){
            return error;
        }

        var saveTicket = service.createTickets(dto);

        return new ResponseEntity<>(saveTicket, HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteTicket(@PathVariable Long id){
        service.removeTickets(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
