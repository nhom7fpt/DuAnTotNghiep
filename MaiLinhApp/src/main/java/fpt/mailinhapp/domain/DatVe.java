package fpt.mailinhapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "dat_ve")
public class DatVe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_ve", nullable = false)
    private Long maVe;

    @Column(name = "so_luong", nullable = false)
    private Integer soLuong;

    @Column(name = "tong_tien", nullable = false)
    private Float tongTien;

    @ManyToOne
    @JoinColumn(name = "tai_khoan")
    private TaiKhoan taiKhoan;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "chuyen_xe")
    private ChuyenXe chuyenXe;

    @JsonIgnore
    @OneToMany(mappedBy = "maVe", orphanRemoval = true)
    private List<VeXeChiTiet> veXeChiTiets = new ArrayList<>();

    @Temporal(TemporalType.DATE)
    @Column(name = "ngay_dat_ve")
    private Date ngayDatVe;

    @ManyToOne
    @JoinColumn(name = "khuyen_mai_ma_khuyen_mai")
    private KhuyenMai khuyenMai;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "thanh_toan_id")
    private ThanhToan thanhToan;

}