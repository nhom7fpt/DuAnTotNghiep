package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.TuyenXe;
import fpt.mailinhapp.dto.TuyenXeDto;
import fpt.mailinhapp.exception.BusesException;
import fpt.mailinhapp.repository.TuyenXeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class TuyenXeService {
    @Autowired
    TuyenXeRepository dao;
    @Transactional(rollbackFor = Exception.class)
    public TuyenXeDto createBuses(TuyenXeDto dto){
        TuyenXe entity = new TuyenXe();
        BeanUtils.copyProperties(dto, entity, new String[]{"tGianDi", "tGianDen"});

        LocalTime tgDi = LocalTime.parse(dto.getTgDi(), DateTimeFormatter.ofPattern("hh:mm"));
        LocalTime tgDen = LocalTime.parse(dto.getTgDen(),DateTimeFormatter.ofPattern("hh:mm"));

        entity.setTgDi(tgDi);
        entity.setTgDen(tgDen);
        var saveEntity = dao.save(entity);

        dto.setMaChuyenXe(saveEntity.getMaChuyenXe());

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public TuyenXeDto updateBuses(Integer id,TuyenXeDto dto){
        var found = dao.findById(id).orElseThrow(()-> new BusesException("Tuyến xe không tồn tại"));

        BeanUtils.copyProperties(dto, found);

        dao.save(found);

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public void deleteBuses(Integer id){
        var found = dao.findById(id).orElseThrow(()-> new BusesException("Tuyến xe không tồn tại"));

        dao.delete(found);
    }

    public List<TuyenXe> findAll() {
        return dao.findAll();
    }
}
