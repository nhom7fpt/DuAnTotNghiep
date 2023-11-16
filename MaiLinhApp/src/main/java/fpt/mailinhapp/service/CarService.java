package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.AnhDaLuu;
import fpt.mailinhapp.domain.Xe;
import fpt.mailinhapp.dto.XeDto;
import fpt.mailinhapp.exception.CarsException;
import fpt.mailinhapp.repository.AnhDaLuuRepository;
import fpt.mailinhapp.repository.XeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CarService {
    @Autowired
    XeRepository dao;
    @Autowired
    AnhDaLuuRepository imgDao;
    @Autowired
    FileStorageService imgService;

    @Transactional(rollbackFor = Exception.class)
    public XeDto createCar(XeDto dto){
        var found = dao.findById(dto.getBienSoXe());
        if(found.isPresent()){
            throw new CarsException("Biển số xe đã tồn tại");
        }



        Xe entity = new Xe();
        BeanUtils.copyProperties(dto, entity,new String[]{"anhDaLuu","anhXeChiTiet"});

        if(dto.getAnhDaLuu() != null){
            AnhDaLuu img = new AnhDaLuu();
            BeanUtils.copyProperties(dto.getAnhDaLuu(), img);
            imgDao.save(img);

        }

        if(dto.getAnhXeChiTiet().size() > 1){
            var listImg = dto.getAnhXeChiTiet().stream().map((item)->{
                AnhDaLuu img = new AnhDaLuu();
                BeanUtils.copyProperties(item, img);
                var saveImg = imgDao.save(img);

                return saveImg;
            }).collect(Collectors.toList());

           entity.setAnhDaLuus(listImg);
        }

        dao.save(entity);

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public XeDto updateCar(String id, XeDto dto){
        var found =  dao.findById(id).orElseThrow(()-> new CarsException("Xe không tồn tại"));

        BeanUtils.copyProperties(dto, found);

        var saveCar = dao.save(found);

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public void deleteCar(String id){
        var found = dao.findById(id).orElseThrow(()->new CarsException("Xe không tồn tại"));
        dao.delete(found);
    }

    public List<Xe> findAll() {
        return dao.findAll();
    }
}
