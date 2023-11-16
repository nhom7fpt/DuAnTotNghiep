package fpt.mailinhapp.dto;

import fpt.mailinhapp.domain.VaiTro;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link fpt.mailinhapp.domain.TaiKhoan}
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaiKhoanDto implements Serializable {
    String tenTaiKhoan;
    String matKhau;
    VaiTro vaiTro;
}