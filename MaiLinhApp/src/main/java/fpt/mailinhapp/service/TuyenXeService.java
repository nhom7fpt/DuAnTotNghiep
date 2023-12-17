package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.DatVe;
import fpt.mailinhapp.domain.NoiTra;
import fpt.mailinhapp.domain.TuyenXe;
import fpt.mailinhapp.dto.TuyenXeDto;
import fpt.mailinhapp.exception.BusesException;
import fpt.mailinhapp.repository.DatVeRepository;
import fpt.mailinhapp.repository.NoiTraRepository;
import fpt.mailinhapp.repository.TuyenXeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TuyenXeService {
    @Autowired
    TuyenXeRepository dao;
    @Autowired
    NoiTraRepository traDao;
    @Autowired
    DatVeRepository datVeDao;
    @Transactional(rollbackFor = Exception.class)
    public TuyenXe createBuses(TuyenXeDto dto) {
        TuyenXe entity = new TuyenXe();
        BeanUtils.copyProperties(dto, entity, new String[]{"tgDi", "tgDen", "noiTras"});

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSX");

        OffsetDateTime offsetDateTimeStart = OffsetDateTime.parse(dto.getTgDi(), formatter);
        offsetDateTimeStart = offsetDateTimeStart.withNano(0); // Gán lại giá trị mới
        OffsetDateTime offsetDateTimeEnd = OffsetDateTime.parse(dto.getTgDen(), formatter);
        offsetDateTimeEnd = offsetDateTimeEnd.withNano(0); // Gán lại giá trị mới
        OffsetDateTime timeZoneStart = offsetDateTimeStart.withOffsetSameInstant(ZoneOffset.ofHours(7));
        OffsetDateTime timeZoneEnd = offsetDateTimeEnd.withOffsetSameInstant(ZoneOffset.ofHours(7));

        LocalTime tgDi = timeZoneStart.toLocalTime();
        LocalTime tgDen = timeZoneEnd.toLocalTime();

        entity.setTgDi(tgDi);
        entity.setTgDen(tgDen);

        var saveEntity = dao.save(entity);

        dto.setMaTuyenXe(saveEntity.getMaTuyenXe());

        return saveEntity;
    }

    @Transactional(rollbackFor = Exception.class)
    public TuyenXeDto updateBuses(Integer id,TuyenXeDto dto){
        var found = dao.findById(id).orElseThrow(()-> new BusesException("Tuyến xe không tồn tại"));

        BeanUtils.copyProperties(dto, found, new String[]{"tgDi","tgDen"});

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSX");

        if(dto.getTgDi() != null){
            OffsetDateTime offsetDateTimeStart = OffsetDateTime.parse(dto.getTgDi(), formatter);
            offsetDateTimeStart.withNano(0);
            OffsetDateTime timeZoneStart = offsetDateTimeStart.withOffsetSameInstant(ZoneOffset.ofHours(7));
            LocalTime tgDi = timeZoneStart.toLocalTime();
            found.setTgDi(tgDi);
        }

        if(dto.getTgDen() != null) {
            OffsetDateTime offsetDateTimeEnd = OffsetDateTime.parse(dto.getTgDen(), formatter);
            offsetDateTimeEnd.withNano(0);
            OffsetDateTime timeZoneEnd = offsetDateTimeEnd.withOffsetSameInstant(ZoneOffset.ofHours(7));


            LocalTime tgDen = timeZoneEnd.toLocalTime();


            found.setTgDen(tgDen);
        }

        dao.save(found);

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public void deleteBuses(Integer id){
        var found = dao.findById(id).orElseThrow(()-> new BusesException("Tuyến xe không tồn tại"));

        dao.delete(found);
    }

    public List<TuyenXe> findAll() {
        List<TuyenXe> allTuyenXe = dao.findAll();

        // Kiểm tra và xử lý ngày giờ trước khi trả về
        for (TuyenXe tuyenXe : allTuyenXe) {
            validateAndFixDateTimeFields(tuyenXe);
        }

        return allTuyenXe;
    }

    private void validateAndFixDateTimeFields(TuyenXe tuyenXe) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss.SSSSSSS");

        try {
            // Parse thành OffsetDateTime để có thể truy cập nanoseconds
            OffsetDateTime offsetDateTimeStart = OffsetDateTime.parse(tuyenXe.getTgDi().toString(), formatter);
            OffsetDateTime offsetDateTimeEnd = OffsetDateTime.parse(tuyenXe.getTgDen().toString(), formatter);

            // Kiểm tra và xử lý giá trị nanoseconds không hợp lệ
            if (offsetDateTimeStart.getNano() < 0 || offsetDateTimeStart.getNano() >= 1_000_000_000) {
                offsetDateTimeStart = offsetDateTimeStart.withNano(0);
            }

            if (offsetDateTimeEnd.getNano() < 0 || offsetDateTimeEnd.getNano() >= 1_000_000_000) {
                offsetDateTimeEnd = offsetDateTimeEnd.withNano(0);
            }

            // Set lại thời gian trong đối tượng TuyenXe
            tuyenXe.setTgDi(offsetDateTimeStart.toLocalTime());
            tuyenXe.setTgDen(offsetDateTimeEnd.toLocalTime());
        } catch (DateTimeParseException e) {
            // Xử lý ngoại lệ khi parse ngày giờ
            e.printStackTrace(); // hoặc log thông báo lỗi
        }
    }


    public List<String> loadLocation(){
        var list = dao.findAll();

        var listData = list.stream().map((item ->{
            return item.getDiemDen();

        })).collect(Collectors.toList());

        for (TuyenXe item : list) {
            listData.add(item.getDiemDi());
        };

        var data = listData.stream().distinct().collect(Collectors.toList());

        return data;
    }

    public List<NoiTra> findAllTra() {
        return traDao.findAll();
    }

    public TuyenXeDto findByid(Integer id){
        var found = dao.findById(id).orElseThrow(()-> new BusesException("Mã tuyến xe không tồn tại"));
        ModelMapper mapper = new ModelMapper();
        return mapper.map(found, TuyenXeDto.class);
    }


}
