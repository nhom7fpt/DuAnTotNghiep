package fpt.mailinhapp.dto;

import fpt.mailinhapp.domain.VeXeChiTiet;
import fpt.mailinhapp.dto.DatVeDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.io.Serializable;
import java.time.LocalTime;
import java.util.Date;

/**
 * DTO for {@link VeXeChiTiet}
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VeXeChiTietDto implements Serializable {
    Long maVeXeChiTiet;
    String nguoiMua;
    String sdt;
    Date ngayDi;
    LocalTime thoiGianDi;
    String viTriNgoi;
    DatVeDto maVe;
}