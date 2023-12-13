package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.DatVe;
import fpt.mailinhapp.domain.Info;
import fpt.mailinhapp.domain.ThanhToan;
import fpt.mailinhapp.dto.DatVeDto;
import fpt.mailinhapp.repository.DatVeRepository;
import fpt.mailinhapp.repository.InfoRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VeXeService {
    @Autowired
    DatVeRepository dao;
    @Autowired
    InfoRepository infoDao;

    @Transactional(rollbackFor = Exception.class)
    public DatVeDto createVe(DatVeDto dto){
        DatVe entity = new DatVe();
        Info info = new Info();
        ThanhToan pay = new ThanhToan();

        BeanUtils.copyProperties(dto,entity, new String[]{"ngayDatVe","info","thanhToan"});
        BeanUtils.copyProperties(dto.getInfo(), info);
        BeanUtils.copyProperties(dto.getThanhToan(),pay);

        entity.setThanhToan(pay);
        var saveInfo = infoDao.save(info);
        entity.setInfo(saveInfo);
        var saveEntity = dao.save(entity);
        dto.setMaVe(saveEntity.getMaVe());

        return dto;
    }

    public List<DatVe> findAll() {
        return dao.findAll();
    }

    public List<DatVeDto> findBysoDT(String id){
        var found = dao.findByInfo_SoDTLike(id);

        if(found != null){
            List<DatVeDto> dto = new ArrayList<>();
            dto = found.stream().map(i->{
                ModelMapper mapper = new ModelMapper();
                return mapper.map(i, DatVeDto.class);
            }).collect(Collectors.toList());
            return dto;
        }
        return null;
    }
}
