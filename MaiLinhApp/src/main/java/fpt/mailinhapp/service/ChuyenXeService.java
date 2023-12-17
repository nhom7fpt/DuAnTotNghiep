package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.ChuyenXe;
import fpt.mailinhapp.domain.NhanVien;
import fpt.mailinhapp.domain.TuyenXe;
import fpt.mailinhapp.domain.Xe;
import fpt.mailinhapp.dto.ChuyenXeDto;
import fpt.mailinhapp.dto.NhanVienDto;
import fpt.mailinhapp.exception.BusesException;
import fpt.mailinhapp.repository.*;
import fpt.mailinhapp.respondata.ChuyenTheoTuyen;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ChuyenXeService {
    @Autowired
    ChuyenXeRepository dao;
    @Autowired
    NhanVienRepository nvDao;
    @Autowired
    TuyenXeRepository tuyenDao;
    @Autowired
    XeRepository xeDao;
    @Autowired
    DatVeRepository datVeDao;

    @Transactional(rollbackFor = Exception.class)
    public ChuyenXeDto instertChuyenXe(ChuyenXeDto dto){
        ChuyenXe entity = new ChuyenXe();

        BeanUtils.copyProperties(dto,entity, new String[]{"xe","tuyenXe","nhanViens"});

        TuyenXe tx = tuyenDao.findById(dto.getTuyenXe()).get();
        Xe xe = xeDao.findById(dto.getXe()).get();
        List<NhanVien> nhanVienList = new ArrayList<>();
        for (NhanVienDto i : dto.getNhanViens()) {
            NhanVien byId = nvDao.findById(i.getSoCCCD()).get();
            nhanVienList.add(byId);
        }

        entity.setXe(xe);
        entity.setTuyenXe(tx);
        entity.setNhanViens(nhanVienList);

        var savEntity = dao.save(entity);

        dto.setMaChuyen(savEntity.getMaChuyen());

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public ChuyenXeDto updateChuyenXe(Long id,ChuyenXeDto dto){
        var found = dao.findById(id).orElseThrow(()->new BusesException("Chuyến xe không tồn tại"));

        BeanUtils.copyProperties(dto, found,new String[]{"xe","tuyenXe","nhanViens"});

        List<NhanVien> nhanVienList = new ArrayList<>();
        for (NhanVienDto i : dto.getNhanViens()) {
            NhanVien byId = nvDao.findById(i.getSoCCCD()).get();
            nhanVienList.add(byId);
        }
        found.setNhanViens(nhanVienList);

        if(dto.getXe() != null){
            Xe xe = xeDao.findById(dto.getXe()).get();
            found.setXe(xe);
        }

        if(dto.getTuyenXe() != null){
            TuyenXe tx = tuyenDao.findById(dto.getTuyenXe()).get();
            found.setTuyenXe(tx);
        }


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

//    public List<ChuyenXeDto> timChuyen(String diemDi, String diemDen) {
//        List<ChuyenXe> listEntity = dao.findByTuyenXe_DiemDiLikeAndTuyenXe_DiemDenLike(diemDi, diemDen);
//
//
//        LocalTime now = LocalTime.now();
//
//        List<ChuyenXe> listData = listEntity.stream()
//                .filter(chuyenXe -> parseTime(chuyenXe.getTuyenXe().getTgDi()).isAfter(now))
//                .collect(Collectors.toList());
//
//        List<ChuyenXeDto> listDto = listData.stream().map(item -> {
//            ModelMapper mapper = new ModelMapper();
//            return mapper.map(item, ChuyenXeDto.class);
//        }).collect(Collectors.toList());
//
//        return listDto;
//    }
public List<ChuyenXeDto> timChuyen(String diemDi, String diemDen){
    List<ChuyenXe> listEntity = dao.findByTuyenXe_DiemDiLikeAndTuyenXe_DiemDenLike(diemDi,diemDen);

    List<ChuyenXeDto> listDto = listEntity.stream().map((item)->{
        ModelMapper mapper = new ModelMapper();
        return mapper.map(item, ChuyenXeDto.class);
    }).collect(Collectors.toList());

    return listDto;
}

    private LocalTime parseTime(LocalTime time) {
        return time;
    }

    public List<ChuyenXeDto> findByTuyen(ChuyenTheoTuyen dto) {
        List<ChuyenXe> listEntity = dao.findByTuyenXe_DiemDiLikeAndTuyenXe_DiemDenLike(dto.getDiemDi(), dto.getDiemDen());

        LocalTime now = LocalTime.now();

        List<ChuyenXe> listData = listEntity.stream()
                .filter(chuyenXe -> parseTime(chuyenXe.getTuyenXe().getTgDi()).isAfter(now))
                .collect(Collectors.toList());

        List<ChuyenXeDto> listDto = listData.stream().map(item -> {
            ModelMapper mapper = new ModelMapper();
            return mapper.map(item, ChuyenXeDto.class);
        }).collect(Collectors.toList());

        return listDto;
    }

    public List<NhanVienDto> getListNhanVienByChuyen(){
        var found = nvDao.findNhanVienWithChuyenXe();
        if(found == null){
            return null;
        }
        var listDto = found.stream().map(item->{
            ModelMapper mapper = new ModelMapper();
            return mapper.map(item, NhanVienDto.class);
        }).collect(Collectors.toList());

        return listDto;
    }

    public List<String> getCho(Long id, Date ngayDi, Date ngayVe){

        var found = datVeDao.findByChuyenXe_MaChuyenAndNgayDiOrNgayVe(id,ngayDi,ngayVe);
        List<String> data = found.stream().flatMap(i->i.getChoNgoi().stream()).collect(Collectors.toList());
        return data;
    }
}
