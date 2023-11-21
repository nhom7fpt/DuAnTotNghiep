import { UploadOutlined } from "@ant-design/icons";
import {
    Button,
    Checkbox,
    Col,
    Divider,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    Upload,
} from "antd";
import React, { Component } from "react";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';


import ImagesService from "../../services/ImagesService";
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY-MM-DD';
class FormProduct extends Component {
    form = React.createRef();



    goNext = () => {
        this.form.current
            .validateFields()
            .then((values) => {
                const newValues = {
                    ...values,

                    anhDaLuu: values.anhDaLuu[0].response,
                };

                this.props.goNext(newValues);
            })
            .catch((errorInfo) => {
                console.log('Validation failed:', errorInfo);
                // Xử lý khi validation không thành công nếu cần
            });
    };

    componentDidUpdate(prevProps) {
        // Kiểm tra nếu dữ liệu product đã được cập nhật
        if (this.props.Car !== prevProps.Car) {
            this.goNext();
        }
    }


    hanldeImageRemove = (info) => {
        console.log("info: ", info);

        if (info.filename) {
            ImagesService.deleteImage(info.fileName);
        } else if (info.response && info.response.fileName) {
            ImagesService.deleteImage(info.response.fileName);
        }
    };

    normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }

        if (e.fileList.length > 1) {
            return [e.fileList[1]];
        }

        return e && e.fileList;
    };
    render() {
        const { Car, loaiXe } = this.props;
        const listLoai = loaiXe.map((item) => {
            const loai = { label: `${item.tenLoai} ${item.loaiGhe} ${item.soGhe}`, value: item.id };
            return loai;

        });

        const ngayMuaData = Car.ngayMua ? dayjs(Car.ngayMua, dateFormat) : "";

        const ngayDKData = Car.ngayDangKiem ? dayjs(Car.ngayDangKiem, dateFormat) : "";

        return (
            <>
                <Form layout="vertical" className="form" size="middle" ref={this.form}>
                    <Row>
                        <Col md={12}>
                            <Form.Item
                                label="Biển số xe"
                                name="bienSoXe"
                                initialValue={Car.bienSoXe}
                            >
                                <Input disabled={Car.bienSoXe ? true : false}></Input>
                            </Form.Item>
                            {/* <Form.Item
                                label="Số Ghế"
                                name="soGhe"
                                render={(status) => <label>{status}</label>}
                            >
                                <Input></Input>
                            </Form.Item> */}
                            <Form.Item
                                label="Ngày Mua"
                                name="ngayMua"


                            >
                                <DatePicker defaultValue={ngayMuaData}></DatePicker>
                            </Form.Item>
                            <Form.Item
                                label="Ngày Đăng Kiểm"
                                name="ngayDangKiem"

                            >
                                <DatePicker defaultValue={ngayDKData}></DatePicker>
                            </Form.Item>
                            <Form.Item
                                label="Giá Mua"
                                name="giaMua"
                                initialValue={Car.giaMua}
                            >
                                <Input></Input>
                            </Form.Item>
                            <Form.Item
                                label="Nơi Mua"
                                name="noiMua"
                                initialValue={Car.noiMua}
                            >
                                <Input></Input>
                            </Form.Item>
                            <Form.Item
                                label="Loại Ghế"
                                name="loaiGhe"

                            >
                                <Select options={listLoai}>

                                </Select>
                            </Form.Item>


                            <Form.Item
                                label="Main Image"
                                name="anhDaLuu"
                                initialValue={
                                    Car.image
                                        ? [
                                            {
                                                ...Car.image,
                                                url: ImagesService.getImageUrl(
                                                    Car.anhDaLuu.fileName
                                                ),
                                            },
                                        ]
                                        : []
                                }
                                rules={[{ required: true }]}
                                hasFeedback
                                valuePropName="fileList"
                                getValueFromEvent={this.normFile}
                            >
                                <Upload
                                    listType="picture"
                                    accept=".jpg, .png, .gif"
                                    maxCount={1}
                                    onRemove={this.hanldeImageRemove}
                                    action={ImagesService.getImageUploadUrl()}
                                >
                                    <Button icon={<UploadOutlined />}>Upload</Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Divider></Divider>
                        <Col md={24}>
                            {" "}
                            <Button
                                type="primary"
                                onClick={this.goNext}
                                style={{ float: "right" }}
                            >
                                Lưu
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </>
        );
    }
}

export default FormProduct;

