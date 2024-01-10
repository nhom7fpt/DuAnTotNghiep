package fpt.mailinhapp.service;

import fpt.mailinhapp.domain.*;
import fpt.mailinhapp.dto.*;
import fpt.mailinhapp.exception.TicketsException;
import fpt.mailinhapp.repository.DatVeRepository;
import fpt.mailinhapp.repository.InfoRepository;

import fpt.mailinhapp.repository.ThanhToanRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class VeXeService {
    @Autowired
    DatVeRepository dao;
    @Autowired
    InfoRepository infoDao;
    @Autowired
    ThanhToanRepository dao1;
    @Transactional(rollbackFor = Exception.class)
    public DatVeDto createVe(DatVeDto dto){
        DatVe entity = new DatVe();
        Info info = new Info();
        ThanhToan pay = new ThanhToan();

        ModelMapper mapper = new ModelMapper();
        BeanUtils.copyProperties(dto,entity, new String[]{"ngayDatVe","info","thanhToan"});
        BeanUtils.copyProperties(dto.getInfo(), info);
        BeanUtils.copyProperties(dto.getThanhToan(),pay);
        ChuyenXe cx = mapper.map(dto.getChuyenXe(), ChuyenXe.class);
        if(dto.getChuyenXeVe() != null){
            ChuyenXe cxv = mapper.map(dto.getChuyenXeVe(), ChuyenXe.class);
            entity.setChuyenXeVe(cxv);
        }

        entity.setChuyenXe(cx);
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
        List<DatVe> found = dao.findByInfo_SoDTLike(id);
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

    private DatVeDto convertToDto(DatVe datVe) {
        DatVeDto datVeDto = new DatVeDto();
        datVeDto.setMaVe(datVe.getMaVe());
        datVeDto.setSoLuong(datVe.getSoLuong());
        datVeDto.setTongTien(datVe.getTongTien());
        datVeDto.setNoiTra(datVe.getNoiTra());
        datVeDto.setChoNgoi(datVe.getChoNgoi());

        ChuyenXeDto chuyenXeDto = convertChuyenXeToDto(datVe.getChuyenXe());
        datVeDto.setChuyenXe(chuyenXeDto);

        InfoDto infoDto = convertInfoToDto(datVe.getInfo());
        datVeDto.setInfo(infoDto);

        ThanhToanDto thanhToanDto = convertThanhToanToDto(datVe.getThanhToan());
        datVeDto.setThanhToan(thanhToanDto);
        // Các trường khác



        return datVeDto;
    }

    private TuyenXeDto convertTuyenXeToDto(TuyenXe tuyenXe) {
        TuyenXeDto tuyenXeDto = new TuyenXeDto();

        BeanUtils.copyProperties(tuyenXe, tuyenXeDto);
        return tuyenXeDto;

    }

    private ThanhToanDto convertThanhToanToDto(ThanhToan thanhToan) {
        ThanhToanDto thanhToanDto = new ThanhToanDto();
        BeanUtils.copyProperties(thanhToan, thanhToanDto);
        return thanhToanDto;
    }
    private ChuyenXeDto convertChuyenXeToDto(ChuyenXe chuyenXe) {
        ChuyenXeDto chuyenXeDto = new ChuyenXeDto();
        BeanUtils.copyProperties(chuyenXe, chuyenXeDto);

        XeDto xeDto = convertXeToDto(chuyenXe.getXe());
        chuyenXeDto.setXedto(xeDto);


        List<NhanVienDto> nhanVienDtos = chuyenXe.getNhanViens().stream()
                .map(this::convertNhanVienToDto)
                .collect(Collectors.toList());

        chuyenXeDto.setNhanViens(nhanVienDtos);
        TuyenXeDto tuyenXeDto = convertTuyenXeToDto(chuyenXe.getTuyenXe());
        chuyenXeDto.setTuyenXe(tuyenXeDto.getMaTuyenXe());
        return chuyenXeDto;

    }
    private XeDto convertXeToDto(Xe xe) {
        XeDto xeDto = new XeDto();
        BeanUtils.copyProperties(xe, xeDto);
        LoaiXeDto loaiXeDto = convertLoaiXeToDto(xe.getLoaiXe());
        xeDto.setLoaiXe(loaiXeDto);


        return xeDto;
    }
    private NhanVienDto convertNhanVienToDto(NhanVien nhanVien) {
        NhanVienDto nhanVienDto = new NhanVienDto();
        BeanUtils.copyProperties(nhanVien, nhanVienDto);

        return nhanVienDto;
    }

    private InfoDto convertInfoToDto(Info info) {
        InfoDto infoDto = new InfoDto();
        BeanUtils.copyProperties(info, infoDto);
        return infoDto;
    }


    private LoaiXeDto convertLoaiXeToDto(LoaiXe loaiXe) {
        LoaiXeDto loaiXeDto = new LoaiXeDto();
        BeanUtils.copyProperties(loaiXe, loaiXeDto);

        return loaiXeDto;
    }
    @Transactional(rollbackFor = Exception.class)
    public DatVeDto getDatVeByThanhToanId(String thanhToanId) {
        DatVe datVeOptional = dao.findByThanhToan_Id(thanhToanId);

        if (datVeOptional != null) {
            ModelMapper mapper = new ModelMapper();
          return mapper.map(datVeOptional, DatVeDto.class);
        } else {
            throw new TicketsException("Không tìm thấy vé liên quan đến thanh toán với mã: " + thanhToanId);
        }
    }

    public DatVeDto findById(Long id){
        var found = dao.findById(id).orElseThrow(()-> new TicketsException("Mã vé không tồn tại"));
        ModelMapper mapper = new ModelMapper();
        return mapper.map(found,DatVeDto.class);
    }

    public void deleteVe(Long id) {
        var found = dao.findById(id).orElseThrow(() -> new TicketsException("Mã vé không tồn tại"));
        var time = found.getThanhToan().getPayDate();
        LocalDateTime now = LocalDateTime.now();


        Duration duration = Duration.between(time, now);

        if (duration.toMinutes() <= 60) {
            dao.delete(found);
        }else{
              throw new TicketsException("Đã quá thời gian hủy vé");
        }
    }

}
