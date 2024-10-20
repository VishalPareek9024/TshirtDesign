import './Hero.css'
import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import Draggable from 'react-draggable';
import * as htmlToImage from 'html-to-image';

const Hero = () => {

    const [uploadedImage, setUploadedImage] = useState(null);


    // Handle image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result); // Set the image data
            };
            reader.readAsDataURL(file);
        }
    };



    const handleDownload = () => {
        const tshirtDiv = document.getElementById('downloadtshirt');

        htmlToImage.toPng(tshirtDiv) // Convert the div to a PNG image
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'TshirtPriview.png';
                link.click();
            })
            .catch((err) => {
                console.error('Failed to capture image:', err);
            });
    };



    return <>
        <div className="hero">
            <div>
                <h2>Upload Image and  try it on Tshirt</h2>
                <div className="btnbox">
                    <button>Upload Image</button>
                    <input type="file" accept='image/*' onChange={handleImageUpload} />
                </div>
            </div>
            <div className='tshirtbox'>
                <div className="tshirt-container">
                    <div className="tshirt" id="downloadtshirt">
                        {uploadedImage && (
                            <Draggable>
                                <ResizableBox
                                    width={150}
                                    height={150}
                                    minConstraints={[50, 50]}
                                    maxConstraints={[300, 300]}
                                    className="resizable-image"
                                >
                                    <img src={uploadedImage} alt="Uploaded Design" className="uploaded-image" />
                                </ResizableBox>
                            </Draggable>
                        )}
                    </div>


                    <button onClick={handleDownload}>Download Image</button>
                </div>

            </div>
        </div>

    </>
}
export default Hero
