package fpt.mailinhapp.clientController;

import fpt.mailinhapp.dto.ThanhToanDto;
import fpt.mailinhapp.service.PayMentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;


@Controller
@CrossOrigin

public class PayReturnController {
    @Autowired
    PayMentService service;


    @GetMapping("/api/v2/payreturn")
    public String payInfo(@RequestParam("vnp_Amount") Long amount,
                          @RequestParam("vnp_BankCode") String bankCode,
                          @RequestParam("vnp_OrderInfo") String orderInfo,
                          @RequestParam("vnp_PayDate") String payDate,
                          @RequestParam("vnp_TransactionNo") String transactionNo,
                          @RequestParam("vnp_TransactionStatus") String transactionStatus) throws ParseException {

        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
        sdf.setTimeZone(TimeZone.getTimeZone("GMT+7"));
        Date datePay = sdf.parse(payDate);
        ThanhToanDto dto = new ThanhToanDto();
        dto.setId(transactionNo);
        dto.setPayDate(datePay);
        dto.setOrderInfo(orderInfo);
        dto.setBank(bankCode);
        dto.setAmount(amount);
        if (transactionStatus.equalsIgnoreCase("00")) {
            dto.setStatus(true);
        } else {
            dto.setStatus(false);
        }

        service.save(dto);

        return "redirect:http://localhost:3000/tuyen/";
    }
}