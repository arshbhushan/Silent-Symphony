import React from 'react';

function ImageUpload() {
  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      console.log(reader.result);
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  return (
    <div className="auth-wrapper">
      <div className='auth-inner' style={{ width: 'auto' }}>
        Let's upload an image
        <input accept="image/*" type="file" onChange={convertToBase64} />
      </div>
    </div>
  );
}

export default ImageUpload;
