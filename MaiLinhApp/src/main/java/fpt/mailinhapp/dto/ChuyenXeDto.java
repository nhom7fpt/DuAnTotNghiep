package fpt.mailinhapp.dto;

import fpt.mailinhapp.domain.NhanVien;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * DTO for {@link fpt.mailinhapp.domain.ChuyenXe}
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChuyenXeDto implements Serializable {
    Integer maChuyen;
    String soKhach;
    private List<NhanVienDto> nhanViens = new ArrayList<>();
    TuyenXeDto tuyenXe;
    XeDto xe;
}