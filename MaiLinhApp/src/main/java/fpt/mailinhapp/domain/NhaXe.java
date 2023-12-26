package fpt.mailinhapp.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "nha_xe")
public class NhaXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "ten_nha_xe", length = 100)
    private String tenNhaXe;

    @Column(name = "dia_chi_nha_xe")
    private String diaChiNhaXe;

    @Column(name = "sdt", length = 13)
    private String sdt;

}