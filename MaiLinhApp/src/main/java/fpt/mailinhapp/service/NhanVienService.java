package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.AnhDaLuu;
import fpt.mailinhapp.domain.HopDong;
import fpt.mailinhapp.domain.NhanVien;
import fpt.mailinhapp.dto.NhanVienDto;
import fpt.mailinhapp.exception.EmployeeException;
import fpt.mailinhapp.repository.AnhDaLuuRepository;
import fpt.mailinhapp.repository.HopDongRepository;
import fpt.mailinhapp.repository.NhanVienRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class NhanVienService {
    @Autowired
    NhanVienRepository dao;

    @Autowired
    FileStorageService imgService;

    @Autowired
    AnhDaLuuRepository imgDao;

    @Autowired
    HopDongRepository hdDao;
    @Transactional(rollbackFor = Exception.class)
    public NhanVienDto createEmployee(NhanVienDto dto){
        var found = dao.findById(dto.getSoCCCD());
        if(found.isPresent()){
            throw new EmployeeException("Nhân viên đã tồn tại");
        }

        NhanVien entity = new NhanVien();
        BeanUtils.copyProperties(dto, entity);

        if(dto.getAnhDaLuu() != null){
            AnhDaLuu img = new AnhDaLuu();
            BeanUtils.copyProperties(dto.getAnhDaLuu(), img);
            var saveImg = imgDao.save(img);
            BeanUtils.copyProperties(saveImg, dto.getAnhDaLuu());
            entity.setAnhDaLuu(saveImg);
        }

        if(dto.getHopDong().getMaHopDong() == null){
            HopDong hd = new HopDong();
            BeanUtils.copyProperties(dto.getHopDong(), hd);
            var saveHD = hdDao.save(hd);
            BeanUtils.copyProperties(saveHD, dto.getHopDong());
            entity.setHopDong(saveHD);
        }




        dao.save(entity);

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public NhanVienDto updateEmploy(String id, NhanVienDto dto){
        var found = dao.findById(id).orElseThrow(()->new EmployeeException("Nhân viên không tồn tại"));


        BeanUtils.copyProperties(dto, found, "anhDaLuu");

        if(dto.getAnhDaLuu() != null){

            if(dto.getAnhDaLuu().getId() == null){
                AnhDaLuu img = new AnhDaLuu();
                BeanUtils.copyProperties(dto.getAnhDaLuu(), img);
                var imgSave = imgDao.save(img);
                BeanUtils.copyProperties(imgSave, dto.getAnhDaLuu());
                found.setAnhDaLuu(imgSave);
            }

            if (dto.getAnhDaLuu().getId() != found.getAnhDaLuu().getId()){
                imgService.deleteImage(found.getAnhDaLuu().getTenTep());
                AnhDaLuu img = new AnhDaLuu();
                BeanUtils.copyProperties(dto.getAnhDaLuu(), img);
                var imgSave = imgDao.save(img);
                found.setAnhDaLuu(imgSave);
            }
        }

        dao.save(found);

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public void deleteEmploy(String id){
        var found = dao.findById(id).orElseThrow(()->new EmployeeException("Nhân viên không tồn tại"));

        imgService.deleteImage(found.getAnhDaLuu().getTenTep());

        dao.delete(found);
    }

    public List<NhanVien> findAll() {
        return (List<NhanVien>) dao.findAll();
    }
}
