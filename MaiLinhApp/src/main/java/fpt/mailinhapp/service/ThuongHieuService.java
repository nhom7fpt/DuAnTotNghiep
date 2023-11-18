package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.ThuongHieu;
import fpt.mailinhapp.dto.ThuongHieuDto;
import fpt.mailinhapp.exception.EmployeeException;
import fpt.mailinhapp.repository.ThuongHieuRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ThuongHieuService {
    @Autowired
    private ThuongHieuRepository thuongHieuRepository;

    @Transactional(rollbackFor = Exception.class)
    public ThuongHieuDto createThuongHieu(ThuongHieuDto dto){
        var found = thuongHieuRepository.findById(dto.getId());
        if (found.isPresent()){
            throw new EmployeeException("Thương hiệu đã tồn tại");
        }

        ThuongHieu entity = new ThuongHieu();
        BeanUtils.copyProperties(dto, entity);
        thuongHieuRepository.save(entity);

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public ThuongHieuDto updateThuongHieu(Long id, ThuongHieuDto dto){
        var found = thuongHieuRepository.findById(id).orElseThrow(() -> new EmployeeException("Thương hiệu không tồn tại"));

        BeanUtils.copyProperties(dto, found);
        thuongHieuRepository.save(found);

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public void deleteThuongHieu(Long id){
        var found = thuongHieuRepository.findById(id).orElseThrow(() -> new EmployeeException("Thương hiệu không tồn tại"));
        thuongHieuRepository.delete(found);
    }

    public List<ThuongHieu> getAllThuongHieu() {
        return thuongHieuRepository.findAll();
    }
}
