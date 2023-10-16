import React  from 'react';
import './ImageUploader.css'
export const ImageUploader = ({image, setImage}) => {
  
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div
      className='add-img-div'
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {image ? (
        <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      ) : (
        <>
          <div>Drop image here</div>
          <div>or</div>
          <label for="file" className='file-input'  onChange={handleFileChange}>
            <span class="feedback__text"> 
            <p className='file-btn'>Choose file </p>File isn't selected</span>
            <input type="file"  id="file" class="feedback__file"/>
          </label>
      
        </>
      )}
    </div>
  );
};