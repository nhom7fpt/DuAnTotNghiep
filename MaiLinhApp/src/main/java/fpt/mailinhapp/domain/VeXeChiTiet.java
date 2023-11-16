package fpt.mailinhapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "ve_xe_chi_tiet")
public class VeXeChiTiet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_ve_xe_chi_tiet", nullable = false)
    private Long maVeXeChiTiet;


    @Column(name = "nguoi_mua", nullable = false, length = 50)
    private String nguoiMua;

    @Column(name = "sdt", nullable = false, length = 11)
    private String sdt;

    @Column(name = "ngay_di", nullable = false)
    private Date ngayDi;

    @Column(name = "thoi_gian_di")
    private LocalTime thoiGianDi;

    @Column(name = "vi_tri_ngoi", nullable = false, length = 10)
    private String viTriNgoi;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "ma_ve_ma_ve")
    private DatVe maVe;

}