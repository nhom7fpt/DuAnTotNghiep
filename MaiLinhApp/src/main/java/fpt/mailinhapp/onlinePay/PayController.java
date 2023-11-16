package fpt.mailinhapp.onlinePay;

import fpt.mailinhapp.dto.ThanhToanDto;
import fpt.mailinhapp.service.PayMentService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;

import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;


@RestController
@RequestMapping("api/v1/payment")
public class PayController {

    @Autowired
    PayMentService service;
    @GetMapping("create_pay")
    public ResponseEntity createPayment() throws UnsupportedEncodingException {

        String vnp_Command = "pay";
        String orderType = "other";
        long amount = 10000*100;
        String bankCode = "";

        String vnp_TxnRef = Config.getRandomNumber(8);
        String vnp_IpAddr = "127.0.0.1";

        String vnp_TmnCode = Config.vnp_TmnCode;

        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", Config.vnp_Version);
        vnp_Params.put("vnp_Command", vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", String.valueOf(amount));
        vnp_Params.put("vnp_CurrCode", "VND");

        if (bankCode != null && !bankCode.isEmpty()) {
            vnp_Params.put("vnp_BankCode", bankCode);
        }
        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);
        vnp_Params.put("vnp_OrderType", orderType);


        vnp_Params.put("vnp_Locale", "vn");

        vnp_Params.put("vnp_ReturnUrl", Config.vnp_ReturnUrl);
        vnp_Params.put("vnp_IpAddr", vnp_IpAddr);

        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("GMT+7"));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String vnp_CreateDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        cld.add(Calendar.MINUTE, 15);
        String vnp_ExpireDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

        List fieldNames = new ArrayList(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = (String) itr.next();
            String fieldValue = (String) vnp_Params.get(fieldName);
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                //Build hash data
                hashData.append(fieldName);
                hashData.append('=');
                hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                //Build query
                query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                query.append('=');
                query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }
        String queryUrl = query.toString();
        String vnp_SecureHash = Config.hmacSHA512(Config.secretKey, hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        String paymentUrl = Config.vnp_PayUrl + "?" + queryUrl;
        PaymentResDto dto = new PaymentResDto();
        dto.setStatus("ok");
        dto.setMessage("successfully");
        dto.setUrl(paymentUrl);

        return new ResponseEntity<>(dto,HttpStatus.OK);
    }

    @GetMapping("pay_return")
    public ResponseEntity payInfo(@RequestParam("vnp_Amount")Long amount,
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
        if(transactionStatus.equalsIgnoreCase("00")){
            dto.setStatus(true);
        }else{
            dto.setStatus(false);
        }

        service.save(dto);

        return new ResponseEntity<>(dto,HttpStatus.OK);
    }

//    @GetMapping("refund_pay")
//    public ResponseEntity refundPayment() throws IOException {
//        String vnp_RequestId = Config.getRandomNumber(8);
//        String vnp_Version = Config.vnp_Version;
//        String vnp_Command = "refund";
//        String vnp_TmnCode = Config.vnp_TmnCode;
//        String vnp_TransactionType = req.getParameter("trantype");
//        String vnp_TxnRef = req.getParameter("order_id");
//        long amount = Integer.parseInt(req.getParameter("amount"))*100;
//        String vnp_Amount = String.valueOf(amount);
//        String vnp_OrderInfo = "Hoan tien GD OrderId:" + vnp_TxnRef;
//        String vnp_TransactionNo = ""; //Assuming value of the parameter "vnp_TransactionNo" does not exist on your system.
//        String vnp_TransactionDate = req.getParameter("trans_date");
//        String vnp_CreateBy = req.getParameter("user");
//
//        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
//        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
//        String vnp_CreateDate = formatter.format(cld.getTime());
//
//        String vnp_IpAddr = Config.getIpAddress(req);
//
//        JSONObject vnp_Params = new JSONObject ();
//
//        vnp_Params.append("vnp_RequestId", vnp_RequestId);
//        vnp_Params.append("vnp_Version", vnp_Version);
//        vnp_Params.append("vnp_Command", vnp_Command);
//        vnp_Params.append("vnp_TmnCode", vnp_TmnCode);
//        vnp_Params.append("vnp_TransactionType", vnp_TransactionType);
//        vnp_Params.append("vnp_TxnRef", vnp_TxnRef);
//        vnp_Params.append("vnp_Amount", vnp_Amount);
//        vnp_Params.append("vnp_OrderInfo", vnp_OrderInfo);
//
//        if(vnp_TransactionNo != null && !vnp_TransactionNo.isEmpty())
//        {
//            vnp_Params.append("vnp_TransactionNo", "{get value of vnp_TransactionNo}");
//        }
//
//        vnp_Params.append("vnp_TransactionDate", vnp_TransactionDate);
//        vnp_Params.append("vnp_CreateBy", vnp_CreateBy);
//        vnp_Params.append("vnp_CreateDate", vnp_CreateDate);
//        vnp_Params.append("vnp_IpAddr", vnp_IpAddr);
//
//        String hash_Data= String.join("|", vnp_RequestId, vnp_Version, vnp_Command, vnp_TmnCode,
//                vnp_TransactionType, vnp_TxnRef, vnp_Amount, vnp_TransactionNo, vnp_TransactionDate,
//                vnp_CreateBy, vnp_CreateDate, vnp_IpAddr, vnp_OrderInfo);
//
//        String vnp_SecureHash = Config.hmacSHA512(Config.secretKey, hash_Data.toString());
//
//        vnp_Params.append("vnp_SecureHash", vnp_SecureHash);
//
//        URL url = new URL (Config.vnp_ApiUrl);
//        HttpURLConnection con = (HttpURLConnection)url.openConnection();
//        con.setRequestMethod("POST");
//        con.setRequestProperty("Content-Type", "application/json");
//        con.setDoOutput(true);
//        DataOutputStream wr = new DataOutputStream(con.getOutputStream());
//        wr.writeBytes(vnp_Params.toString());
//        wr.flush();
//        wr.close();
//        int responseCode = con.getResponseCode();
//        System.out.println("nSending 'POST' request to URL : " + url);
//        System.out.println("Post Data : " + vnp_Params);
//        System.out.println("Response Code : " + responseCode);
//        BufferedReader in = new BufferedReader(
//                new InputStreamReader(con.getInputStream()));
//        String output;
//        StringBuffer response = new StringBuffer();
//        while ((output = in.readLine()) != null) {
//            response.append(output);
//        }
//        in.close();
//        System.out.println(response.toString());
//
//    }

}
