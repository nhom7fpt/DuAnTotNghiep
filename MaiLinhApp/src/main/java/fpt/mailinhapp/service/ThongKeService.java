package fpt.mailinhapp.service;

import fpt.mailinhapp.repository.DatVeRepository;
import fpt.mailinhapp.repository.ThanhVienRepository;
import fpt.mailinhapp.repository.VeXeChiTietRepository;
import jdk.jfr.TransitionTo;
import org.aspectj.weaver.ast.Var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class ThongKeService {
    @Autowired
    VeXeChiTietRepository dvDao;
    @Transactional(rollbackFor = Exception.class)
    public List ThongKeTheoQuy(){
        List <Long> dataQuy = new ArrayList<>();
        var q1= dvDao.thongKeTheoQuy(1,3);
        dataQuy.add(q1);
        var q2= dvDao.thongKeTheoQuy(3,6);
        dataQuy.add(q2);
        var q3= dvDao.thongKeTheoQuy(7,9);
        dataQuy.add(q3);
        var q4 = dvDao.thongKeTheoQuy(10,12);
        dataQuy.add(q4);
        return  dataQuy;
    }
    public Long ThongKeTheoThang(int month, int year){
        var data = dvDao.thongKeTheoThang(month, year);
        return data;
    }
    public Long ThongKeTheoNam(int year){
        var data = dvDao.thongKeTheoNam(year);
        return data;
    }

}
