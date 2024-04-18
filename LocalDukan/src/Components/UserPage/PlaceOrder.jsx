import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom'
function PlaceOrder(){
    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const handleUploadButtonClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {

        setImage(""); 
    }

    return(
        <>
            <div className="bg-[#FFF7F0] p-5">
                <p className="text-3xl font-[700] pt-[25px] text-center">Place the Order Here</p>
                <div className="m-[50px] flex justify-around">
                    <div className="how-to-upload bg-[#F9E0D0] p-[20px] w-[500px] rounded-lg">
                        <p className="text-center text-3xl font-[750]">Here's how to do it!</p>
                        <p className="mt-5"><span className="text-2xl font-[650]">Step 1: </span><br />Click the Photo of the List of items to buy.</p>
                        <p className="mt-5"><span className="text-2xl font-[650]">Step 2: </span><br />Upload The image by clicking the upload button.</p>
                        <p className="mt-5"><span className="text-2xl font-[650]">Step 3: </span><br />Add message to the shopkeeper (optional) </p>
                        <p className="mt-5"><span className="text-2xl font-[650]">Step 4: </span><br />And its done.</p>
                    </div>
                    <div className="uploading">
                        <div className="card bg-[#F9E0D0] flex gap-5 p-[20px] w-[500px] rounded-lg">
                            <div id="imgtag">
                                {image ? (
                                    <img src={URL.createObjectURL(image)} alt=""/>
                                ) : (
                                    <img src="./src/assets/uploadimg.svg" className="h-[100px]" alt="Promote to add image"/>
                                )}
                            </div>
                            {!image && (
                                <div >
                                    <p className="text-2xl font-[450]">Upload the image Here:</p>
                                    <button onClick={handleUploadButtonClick} className="text-white mt-[5px] p-2 h-[50px] w-[auto] bg-[#FD6507] rounded-lg hover:bg-white hover:border-[#FD650B] hover:border-2 hover:text-[#FD650B] duration-150 ease-out hover:ease-in hover:transition-all">Upload Image</button>
                                </div>
                            )}
                            <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: "none" }} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link to={'/ShopSelection'}>
                        <button className="text-white mt-[5px] p-2 h-[50px] w-[auto] bg-[#FD6507] rounded-lg hover:bg-white hover:border-[#FD650B] hover:border-2 hover:text-[#FD650B] ">Confirm Order</button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default PlaceOrder;