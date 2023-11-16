package fpt.mailinhapp.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "hop_dong")
public class HopDong {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_hop_dong", nullable = false)
    private Integer maHopDong;

    @Temporal(TemporalType.DATE)
    @Column(name = "ngay_ky", nullable = false)
    private Date ngayKy;

    @Temporal(TemporalType.DATE)
    @Column(name = "ngay_het_han", nullable = false)
    private Date ngayHetHan;

    @Temporal(TemporalType.DATE)
    @Column(name = "ngay_di_lam", nullable = false)
    private Date ngayDiLam;

    @Column(name = "luong_cb", nullable = false)
    private Float luongCB;

}