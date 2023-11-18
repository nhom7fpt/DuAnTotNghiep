package fpt.mailinhapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link fpt.mailinhapp.domain.ThanhVien}
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ThanhVienDto implements Serializable {
    String id;
    String hoTen;
    String diaChi;
    String email;
    AnhDaLuuDto anhDaLuu;
}
