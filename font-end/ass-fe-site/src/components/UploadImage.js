import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";

import ImagesService from "../services/imageService";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const UploadImage = (props) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = (info) => {
 

  if(info && info.file && info.file.response){
    props.onUploadFile(info.file.response);
  }

    


  };


  const handleRemove = (info) => {
    if (info.filename) {
      ImagesService.deleteImage(info.fileName);
    } else if (info.response && info.response.fileName) {
      ImagesService.deleteImage(info.response.fileName);
    }
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const { file,profileImage } = props;
const avata = profileImage
  ? [
      {
        uid: profileImage.id,
        name: profileImage.tenAnh,
        status: 'done',
        url: ImagesService.getImageUrl(profileImage.tenTep),
      },
    ]
  : [];
  console.log(avata);
  return (
    <>
      <Upload
        action={ImagesService.getImageUploadUrl()}
        listType="picture-card"
       maxCount={1}
       defaultFileList={avata}
        multiple={false}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={handleRemove}
      

      >
        {  file > 0 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="PreviewImage"
          className="full-size-image"  
          src={previewImage}
        />
      </Modal>
    </>
  );
};
export default UploadImage;
