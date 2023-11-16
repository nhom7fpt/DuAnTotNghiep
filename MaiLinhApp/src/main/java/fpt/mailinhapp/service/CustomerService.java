package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.AnhDaLuu;
import fpt.mailinhapp.domain.ThanhVien;
import fpt.mailinhapp.dto.ThanhVienDto;
import fpt.mailinhapp.exception.CustomerException;
import fpt.mailinhapp.repository.AnhDaLuuRepository;
import fpt.mailinhapp.repository.ThanhVienRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    ThanhVienRepository dao;

    @Autowired
    AnhDaLuuRepository imgDao;

    @Autowired
    FileStorageService imgService;

    @Transactional(rollbackFor = Exception.class)
    public ThanhVienDto insertCustomers(ThanhVienDto dto){
        ThanhVien entity = new ThanhVien();
        BeanUtils.copyProperties(dto, entity);

        if(dto.getAnhDaLuu() != null){
            AnhDaLuu img = new AnhDaLuu();
            BeanUtils.copyProperties(dto.getAnhDaLuu(), img);
            var saveImg = imgDao.save(img);
            BeanUtils.copyProperties(saveImg, dto.getAnhDaLuu());
            entity.setAnhDaLuu(saveImg);
        }

        var saveCus = dao.save(entity);
        dto.setSoDT(saveCus.getId());

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public ThanhVienDto updateCustomers(String id, ThanhVienDto dto){
        var found = dao.findById(id).orElseThrow(()-> new CustomerException("Thành viên không tồn tại"));
        String[] ignoreFields = new String[]{"ngayTao","anhDaLuu"};

        BeanUtils.copyProperties(dto, found, ignoreFields);

        if(dto.getAnhDaLuu() != null){

            if(dto.getAnhDaLuu().getId() == null){
                AnhDaLuu img = new AnhDaLuu();
                BeanUtils.copyProperties(dto.getAnhDaLuu(), img);
                imgDao.save(img);
                found.setAnhDaLuu(img);
            }

            if (dto.getAnhDaLuu().getId() != found.getAnhDaLuu().getId()){
                imgService.deleteImage(found.getAnhDaLuu().getTenTep());
                AnhDaLuu img = new AnhDaLuu();
                BeanUtils.copyProperties(dto.getAnhDaLuu(), img);
                imgDao.save(img);
                found.setAnhDaLuu(img);
            }
        }

        var saveEntity = dao.save(found);

        dto.setSoDT(found.getId());
        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public void deleteCus(String id){
        var found = dao.findById(id).orElseThrow(()->new CustomerException("Thành viên không tồn tại"));

        if(found.getAnhDaLuu() != null){
            imgService.deleteImage(found.getAnhDaLuu().getTenTep());
            imgDao.deleteById(found.getAnhDaLuu().getId());
        }

        dao.delete(found);
    }

    public List findAll() {
        return (List) dao.findAll();
    }

    public ThanhVienDto findById(String id) {
        var found = dao.findById(id).orElseThrow(()->new CustomerException("Thành viên không tồn tại"));
        ThanhVienDto dto = new ThanhVienDto();
        BeanUtils.copyProperties(found, dto);

        return dto;
    }
}
