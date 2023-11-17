package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.LoaiXe;
import fpt.mailinhapp.dto.LoaiXeDto;
import fpt.mailinhapp.exception.EmployeeException;
import fpt.mailinhapp.repository.LoaiXeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class LoaiXeService {

    @Autowired
    LoaiXeRepository loaiXeRepository;

    public LoaiXeService(LoaiXeRepository loaiXeRepository) {
        this.loaiXeRepository = loaiXeRepository;
    }

    @Transactional(rollbackFor = Exception.class)
    public LoaiXeDto createLoaiXe(LoaiXeDto dto){
        var found = loaiXeRepository.findById(dto.getId());
        if (found.isPresent()){
            throw new EmployeeException("Loại xe đã tồn tại");
        }

        LoaiXe entity = new LoaiXe();
        BeanUtils.copyProperties(dto, entity);
        loaiXeRepository.save(entity);

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public LoaiXeDto updateLoaiXe(Integer id, LoaiXeDto dto){
        var found = loaiXeRepository.findById(id).orElseThrow(()-> new EmployeeException("Loại xe không tồn tại"));
        BeanUtils.copyProperties(dto, found);
        loaiXeRepository.save(found);
        loaiXeRepository.save(found);

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public void deleteLoaiXe(Integer id) {
        var found = loaiXeRepository.findById(id).orElseThrow(() -> new EmployeeException("Loại xe không tồn tại"));
        loaiXeRepository.delete(found);
    }

    public List<LoaiXeDto> findAllLoaiXe() {
        List<LoaiXe> loaiXeList = (List<LoaiXe>) loaiXeRepository.findAll();
        return loaiXeList.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());

    }

    private LoaiXeDto convertToDto(LoaiXe loaiXe) {
        LoaiXeDto dto = new LoaiXeDto();
        BeanUtils.copyProperties(loaiXe, dto);
        return dto;
    }
}
