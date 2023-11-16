package fpt.mailinhapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.io.Serializable;
import java.sql.Time;
import java.time.LocalTime;

/**
 * DTO for {@link fpt.mailinhapp.domain.TuyenXe}
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TuyenXeDto implements Serializable {
    Integer maTuyenXe;
    String diemDi;
    String diemDen;
    String noiDon;
    String noiTra;
    String tgDi;
    String tgDen;
    Float gia;
}