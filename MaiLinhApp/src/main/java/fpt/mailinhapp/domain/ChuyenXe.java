package fpt.mailinhapp.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.proxy.HibernateProxy;

import java.util.*;

@Getter
@Setter
@Entity
@Table(name = "chuyen_xe")
public class ChuyenXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ma_chuyen", nullable = false)
    private Integer maChuyen;

    @Column(name = "so_khach")
    private String soKhach;



    @ManyToOne
    @JoinColumn(name = "tuyen_xe")
    private TuyenXe tuyenXe;


    @ManyToOne
    @JoinColumn(name = "xe")
    private Xe xe;

    @ManyToMany
    @JoinTable(name = "chuyen_xe_nhanViens",
            joinColumns = @JoinColumn(name = "chuyenXe_ma_chuyen"),
            inverseJoinColumns = @JoinColumn(name = "nhanViens_so_cccd"))
    private List<NhanVien> nhanViens = new ArrayList<>();

    @Override
    public final boolean equals(Object o) {
        if (this == o) return true;
        if (o == null) return false;
        Class<?> oEffectiveClass = o instanceof HibernateProxy ? ((HibernateProxy) o).getHibernateLazyInitializer().getPersistentClass() : o.getClass();
        Class<?> thisEffectiveClass = this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass() : this.getClass();
        if (thisEffectiveClass != oEffectiveClass) return false;
        ChuyenXe chuyenXe = (ChuyenXe) o;
        return getMaChuyen() != null && Objects.equals(getMaChuyen(), chuyenXe.getMaChuyen());
    }

    @Override
    public final int hashCode() {
        return this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass().hashCode() : getClass().hashCode();
    }
}