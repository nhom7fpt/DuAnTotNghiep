package fpt.mailinhapp.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "thanh_vien")
public class ThanhVien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "ho_ten", nullable = true, length = 50)
    private String hoTen;

    @Column(name = "dia_chi", length = 100)
    private String diaChi;

    @Column(name = "email", nullable = true, length = 50)
    private String email;

    @Column(name = "so_dt", nullable = false, length = 11)
    private String soDT;

    @Temporal(TemporalType.DATE)
    @Column(name = "ngay_tao")
    private Date ngayTao;

    @Column(name = "ngay_chinh_su")
    private Date ngayChinhSu;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "tai_khoan_ten_tai_khoan")
    private TaiKhoan taiKhoan;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "anh_da_luu_id")
    private AnhDaLuu anhDaLuu;

    @PrePersist
    public void prePersist() {
        ngayTao = new Date();
    }

    @PreUpdate
    public void preUpdate() {
        ngayChinhSu = new Date();
    }

}