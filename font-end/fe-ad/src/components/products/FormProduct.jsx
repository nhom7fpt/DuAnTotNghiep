// import { UploadOutlined } from "@ant-design/icons";
// import {
//     Button,
//     Checkbox,
//     Col,
//     Divider,
//     Form,
//     Input,
//     InputNumber,
//     Row,
//     Select,
//     Upload,
// } from "antd";
// import React, { Component } from "react";


// import { toast } from "react-toastify";
// import { MdOutlineCategory } from "react-icons/md";
// import ImagesService from "../../services/ImagesService";
// class FormProduct extends Component {
//     form = React.createRef();



//     goNext = () => {
//         this.form.current
//             .validateFields()
//             .then((values) => {
//                 const newValues = {
//                     ...values,
//                     description: this.state.descriptionCkData,
//                     image: values.image[0].response,
//                 };

//                 this.props.goNext(newValues);
//             })
//             .catch((info) => {
//                 console.log(info);
//                 toast.error("Data validation Error. Please check your input fields");
//             });
//     };

//     componentDidUpdate(prevProps) {
//         // Kiểm tra nếu dữ liệu product đã được cập nhật
//         if (this.props.Car !== prevProps.Car) {
//             this.goNext();
//         }
//     }

//     componentDidMount = () => {
//         this.setState({
//             ...this.state,
//             descriptionCkData: this.props.Car.description
//                 ? this.props.Car.description
//                 : null,
//         });
//     };

//     static getDerivedStateFromProps(nextProps, prevState) {
//         if (nextProps.product.description && !prevState.descriptionCkData) {
//             return {
//                 ...prevState,
//                 descriptionCkData: nextProps.product.description,
//             };
//         }
//         return prevState;
//     }

//     hanldeImageRemove = (info) => {
//         console.log("info: ", info);

//         if (info.filename) {
//             ImagesService.deleteImage(info.fileName);
//         } else if (info.response && info.response.fileName) {
//             ImagesService.deleteImage(info.response.fileName);
//         }
//     };

//     normFile = (e) => {
//         if (Array.isArray(e)) {
//             return e;
//         }

//         if (e.fileList.length > 1) {
//             return [e.fileList[1]];
//         }

//         return e && e.fileList;
//     };
//     render() {
//         const { Car, loaiXe } = this.props;

//         return (
//             <>
//                 <Form layout="vertical" className="form" size="middle" ref={this.form}>
//                     <Row>
//                         <Col md={12}>
//                             <Form.Item
//                                 label="Biển số xe"
//                                 name="bienSoXe"
//                                 initialValue={Car.bienSoXe}
//                             >
//                                 <Input></Input>
//                             </Form.Item>
//                             <Form.Item
//                                 label="Số Ghế"
//                                 name="soGhe"
//                                 render={(status) => <label>{status}</label>}
//                             >
//                                 <Input></Input>
//                             </Form.Item>
//                             <Form.Item
//                                 label="Ngày Mua"
//                                 name="ngayMua"
//                                 initialValue={Car.ngayMua}
//                             >
//                                 <Input></Input>
//                             </Form.Item>
//                             <Form.Item
//                                 label="Ngày Đăng Kiểm"
//                                 name="ngayDangKiem"
//                                 initialValue={Car.ngayDangKiem}
//                             >
//                                 <Input></Input>
//                             </Form.Item>
//                             <Form.Item
//                                 label="Giá Mua"
//                                 name="giaMua"
//                                 initialValue={Car.giaMua}
//                             >
//                                 <Input></Input>
//                             </Form.Item>
//                             <Form.Item
//                                 label="Nơi Mua"
//                                 name="noiMua"
//                                 initialValue={Car.noiMua}
//                             >
//                                 <Input></Input>
//                             </Form.Item>
//                             <Form.Item
//                                 label="Thương Hiệu"
//                                 name="thuongHieu"
//                                 initialValue={Car.thuongHieu}
//                             >
//                                 <Input></Input>
//                             </Form.Item>
//                             <Form.Item
//                                 label="Loại Xe"
//                                 name="loaiXe"
//                                 initialValue={Car.loaiXe ? Car.loaiXe.id :}
//                             >
//                                 <Input></Input>
//                             </Form.Item>

//                             {/* <Form.Item
//                                 label="Main Image"
//                                 name="image"
//                                 initialValue={
//                                     product.image
//                                         ? [
//                                             {
//                                                 ...product.image,
//                                                 url: ImagesService.getProductImageUrl(
//                                                     product.image.fileName
//                                                 ),
//                                             },
//                                         ]
//                                         : []
//                                 }
//                                 rules={[{ required: true }]}
//                                 hasFeedback
//                                 valuePropName="fileList"
//                                 getValueFromEvent={this.normFile}
//                             >
//                                 <Upload
//                                     listType="picture"
//                                     accept=".jpg, .png, .gif"
//                                     maxCount={1}
//                                     onRemove={this.hanldeImageRemove}
//                                     action={ImagesService.getImageUploadUrl()}
//                                 >
//                                     <Button icon={<UploadOutlined />}>Upload</Button>
//                                 </Upload>
//                             </Form.Item> */}
//                         </Col>
//                     </Row>

//                     <Row>
//                         <Divider></Divider>
//                         <Col md={24}>
//                             {" "}
//                             <Button
//                                 type="primary"
//                                 onClick={this.goNext}
//                                 style={{ float: "right" }}
//                             >
//                                 Next
//                             </Button>
//                         </Col>
//                     </Row>
//                 </Form>
//             </>
//         );
//     }
// }

// export default FormProduct;
