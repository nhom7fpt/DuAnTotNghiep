package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.ChuyenXe;
import fpt.mailinhapp.dto.ChuyenXeDto;
import fpt.mailinhapp.exception.BusesException;
import fpt.mailinhapp.repository.ChuyenXeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ChuyenXeService {
    @Autowired
    ChuyenXeRepository dao;

    @Transactional(rollbackFor = Exception.class)
    public ChuyenXeDto instertChuyenXe(ChuyenXeDto dto){
        ChuyenXe entity = new ChuyenXe();

        BeanUtils.copyProperties(dto,entity);

        var savEntity = dao.save(entity);

        dto.setMaChuyen(savEntity.getMaChuyen());

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public ChuyenXeDto updateChuyenXe(Long id,ChuyenXeDto dto){
        var found = dao.findById(id).orElseThrow(()->new BusesException("Chuyến xe không tồn tại"));

        BeanUtils.copyProperties(dto, found);

        var saveEntity = dao.save(found);

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public void deleteChuyen(Long id){
        var found = dao.findById(id).orElseThrow(()-> new BusesException("Chuyến xe không tồn tại"));

        dao.delete(found);
    }

    public List<ChuyenXe> findAll() {
        return dao.findAll();
    }

    public List<ChuyenXeDto> timChuyen(String diemDi, String diemDen){
        List<ChuyenXe> listEntity = dao.findByTuyenXe_DiemDiLikeAndTuyenXe_DiemDenLike(diemDi,diemDen);

        List<ChuyenXeDto> listDto = listEntity.stream().map((item)->{
            ChuyenXeDto dto = new ChuyenXeDto();
            BeanUtils.copyProperties(item, dto);
            return dto;
        }).collect(Collectors.toList());

        return listDto;
    }
}
