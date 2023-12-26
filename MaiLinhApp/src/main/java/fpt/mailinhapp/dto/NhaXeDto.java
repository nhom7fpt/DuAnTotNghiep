package fpt.mailinhapp.dto;

import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link fpt.mailinhapp.domain.NhaXe}
 */
@Value
public class NhaXeDto implements Serializable {
    Long id;
    String tenNhaXe;
    String diaChiNhaXe;
    String sdt;
}