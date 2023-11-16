package fpt.mailinhapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.io.Serializable;
import java.util.Date;

/**
 * DTO for {@link fpt.mailinhapp.domain.HopDong}
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HopDongDto implements Serializable {
    Integer maHopDong;
    Date ngayKy;
    Date ngayHetHan;
    Date ngayDiLam;
    Float luongCB;
}