package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.NhaXe;
import fpt.mailinhapp.dto.NhaXeDto;
import fpt.mailinhapp.exception.CarsException;
import fpt.mailinhapp.repository.NhaXeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NhaXeService {
    @Autowired
    NhaXeRepository dao;

    public List<NhaXe> findAll() {
        return dao.findAll();
    }

    public NhaXeDto saveNhaXe(NhaXeDto dto){
        NhaXe entity = new NhaXe();
        BeanUtils.copyProperties(dto, entity);
        var saveEntity = dao.save(entity);
        dto.setId(saveEntity.getId());
        return dto;
    }

    public NhaXeDto updateNhaXe(Long id,NhaXeDto dto){
        var found = dao.findById(id).orElseThrow(()-> new CarsException("Nhà xe không tồn tại"));
        BeanUtils.copyProperties(dto, found);
        dao.save(found);
        return dto;
    }

    public void deleteNhaXe(Long id){
        var found = dao.findById(id).orElseThrow(()-> new CarsException("Nhà xe không tồn tại"));
        dao.delete(found);
    }
}
