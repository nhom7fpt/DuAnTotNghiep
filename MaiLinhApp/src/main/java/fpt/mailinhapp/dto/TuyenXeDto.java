package fpt.mailinhapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

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
    private Set<NoiTraDto> noiTras = new LinkedHashSet<>();

    String  tgDi;
    String tgDen;
    Long gia;
}