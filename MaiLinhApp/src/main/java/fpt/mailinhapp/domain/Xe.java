package fpt.mailinhapp.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.proxy.HibernateProxy;

import java.util.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "xe")
public class Xe {
    @Id
    @Column(name = "bien_so_xe", nullable = false)
    private String bienSoXe;


    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "dd-MM-yyyy")
    @Column(name = "ngay_mua", nullable = true)
    private Date ngayMua;

    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "dd-MM-YYYY")
    @Column(name = "ngay_dang_kiem")
    private Date ngayDangKiem;

    @Column(name = "gia_mua", nullable = false)
    private Long giaMua;

    @Column(name = "noi_mua")
    private String noiMua;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "anh_da_luu_id")
    private AnhDaLuu anhDaLuu;



    @OneToMany(mappedBy = "xe", orphanRemoval = true)
    private Set<ChuyenXe> chuyenXes = new LinkedHashSet<>();

    @ManyToOne
    @JoinColumn(name = "thuong_hieu_id")
    private ThuongHieu thuongHieu;

    @ManyToOne
    @JoinColumn(name = "loai_xe_id")
    private LoaiXe loaiXe;

}