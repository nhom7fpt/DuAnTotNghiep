package fpt.mailinhapp.respondata;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReqTimMotChieu {
    private String diemDi;
    private String diemDen;
    private Date tgDi;
}
