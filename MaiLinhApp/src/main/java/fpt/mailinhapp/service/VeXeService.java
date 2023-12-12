package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.DatVe;
import fpt.mailinhapp.domain.VeXeChiTiet;
import fpt.mailinhapp.dto.DatVeDto;
import fpt.mailinhapp.dto.VeXeChiTietDto;
import fpt.mailinhapp.exception.TicketsException;
import fpt.mailinhapp.repository.DatVeRepository;
import fpt.mailinhapp.repository.VeXeChiTietRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class VeXeService {
    @Autowired
    DatVeRepository dao;

    @Autowired
    VeXeChiTietRepository veDao;

    @Transactional(rollbackFor = Exception.class)
    public DatVeDto createTickets(DatVeDto dto){
        if(dto.getVeXeChiTiets().size() < 1){
            throw new TicketsException("Vui lòng đặt ghế và điền thông tin");
        }


        DatVe entity = new DatVe();

        BeanUtils.copyProperties(dto, entity);

        var newEntity = dao.save(entity);
        dto.setMaVe(newEntity.getMaVe());

        var listTickets = dto.getVeXeChiTiets().stream().map((item)->{
            VeXeChiTiet vxct = new VeXeChiTiet();
            BeanUtils.copyProperties(item, vxct);
            vxct.setDatVe(newEntity);
            var saveVX = veDao.save(vxct);

            return saveVX;
        }).collect(Collectors.toList());

        newEntity.setVeXeChiTiets(listTickets);

        dao.save(newEntity);

        return dto;
    }

    @Transactional(rollbackFor = Exception.class)
    public void removeTickets(Long id){
        var found = dao.findById(id).orElseThrow(()-> new TicketsException("Mã vé không tồn tại"));

        dao.delete(found);
    }

    public List<DatVe> findAll() {
        return dao.findAll();
    }

    public List<VeXeChiTietDto> findById(Long id){

        var found = dao.findById(id).orElseThrow(()-> new TicketsException("Mã đặt vé không tồn tại"));

        List<VeXeChiTiet> listEntity = veDao.findByDatVe_MaVe(id);

        List<VeXeChiTietDto> listDto = listEntity.stream().map(item ->{
            VeXeChiTietDto dto =  new VeXeChiTietDto();
            BeanUtils.copyProperties(item, dto);
            return dto;
        }).collect(Collectors.toList());

        return listDto;git
    }
    public List<DatVeDto> findByAccount(String id){
        var found = dao.findByTaiKhoan_TenTaiKhoan(id);


        var dto = found.stream().map(i->{
            ModelMapper mapper = new ModelMapper();
            return mapper.map(i, DatVeDto.class);
        }).collect(Collectors.toList());

        return dto;
    }
}
