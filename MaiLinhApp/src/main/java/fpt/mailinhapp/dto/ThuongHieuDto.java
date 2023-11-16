package fpt.mailinhapp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * DTO for {@link fpt.mailinhapp.domain.ThuongHieu}
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ThuongHieuDto implements Serializable {
    private Long id;
    private String tenThuongHieu;
}