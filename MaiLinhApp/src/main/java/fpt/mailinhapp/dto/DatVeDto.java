package fpt.mailinhapp.dto;

import fpt.mailinhapp.domain.DatVe;
import fpt.mailinhapp.dto.ChuyenXeDto;
import fpt.mailinhapp.dto.InfoDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DatVeDto implements Serializable {
    Long maVe;
    Integer soLuong;
    Long tongTien;
    String noiTra;
    List<String> choNgoi;
    ChuyenXeDto chuyenXe;
    InfoDto info;
    Date ngayDatVe;
    Date ngayDi;
    Date ngayVe;
    ThanhToanDto thanhToan;

}
