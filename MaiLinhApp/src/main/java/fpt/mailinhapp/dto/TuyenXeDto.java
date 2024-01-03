package fpt.mailinhapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;
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
