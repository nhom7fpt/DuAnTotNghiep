package fpt.mailinhapp.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "thanh_toan")
public class ThanhToan {
    @Id
    @Column(name = "id", nullable = false)
    private String id;

    @Column(name = "so_tien")
    private Long amount;

    @Column(name = "ngan_hang", length = 20)
    private String bank;

    @Column(name = "order_info")
    private String orderInfo;

    @Temporal(TemporalType.DATE)
    @Column(name = "pay_date")
    private Date payDate;

    @Column(name = "trang_thai")
    private Boolean status;



}