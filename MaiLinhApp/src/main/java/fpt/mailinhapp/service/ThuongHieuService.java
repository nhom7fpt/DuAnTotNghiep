package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.ThuongHieu;
import fpt.mailinhapp.dto.ThuongHieuDto;
import fpt.mailinhapp.exception.AccountException;
import fpt.mailinhapp.exception.TicketsException;
import fpt.mailinhapp.repository.ThuongHieuRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class ThuongHieuService {
    @Autowired
    ThuongHieuRepository dao;

    @Transactional(rollbackFor = Exception.class)
    public ThuongHieuDto íntertThuongHieu(ThuongHieuDto dto){
        ThuongHieu entity = new ThuongHieu();

        BeanUtils.copyProperties(dto, entity);

        var saveEntity = dao.save(entity);

        dto.setId(saveEntity.getId());

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public ThuongHieuDto updateThuongHieu(Long id, ThuongHieuDto dto){
        var found = dao.findById(id).orElseThrow(()-> new TicketsException("Thương hiệu không tồn tại"));
        BeanUtils.copyProperties(dto, found);

        return  dto;
    }

    public ThuongHieuDto findById(Long id){
        var found = dao.findById(id).orElseThrow(()-> new TicketsException("thuong hieu khong ton tai"));
        ThuongHieuDto dto = new ThuongHieuDto();
        BeanUtils.copyProperties(found, dto);
        return dto;
    }

    public List getlist(){
        return dao.findAll();
    }

    @Transactional(rollbackFor = ExecutionException.class)
    public void deleteThuongHieu(Long id){
        var found = dao.findById(id).orElseThrow(()-> new TicketsException("Thương hiệu không tồn tại"));

        dao.delete(found);
    }
}
