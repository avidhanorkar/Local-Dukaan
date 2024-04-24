import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import '../../index.css';



function PlaceOrder() {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    const [text, setText] = useState("");

    const handleUploadButtonClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    // const handleSubmit = () => {
    //     // Send data to backend
    //     const formData = new FormData();
    //     formData.append("image", image);
    //     formData.append("text", text);

    //     // Example: Send a POST request to backend endpoint
    //     fetch("http://localhost:3000/upload", {
    //         method: "POST",
    //         body: formData
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));
    // }
    const handleSubmit = () => {
        console.log("Text to be added:", text);
    
        // Read the existing JSON file
        fetch('/src/Components/UserPage/Store/shop-category.json')
            .then(response => response.json())
            .then(jsonData => {
                console.log("Existing JSON data:", jsonData);
    
                // Update the 'list' property with the new text
                jsonData.list += text ;
                console.log("Updated JSON data:", jsonData);
    
                // Write the updated JSON back to the file
                fetch('/src/Components/UserPage/Store/shop-category.json', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(jsonData)
                })
                .then(() => console.log('Text added to JSON file'))
                .catch(error => console.error('Error updating JSON file:', error));
            })
            .catch(error => console.error('Error reading JSON file:', error));
    }
    
    return(
        <>
            <div className="bg-[#FFF7F0] p-5 flex flex-col justify-center">
                <p className="text-3xl font-[700] pt-[25px] text-center">Place the Order Here</p>
                <div className="m-[50px] flex gap-5 mx-[auto]">
                    <div className="how-to-upload bg-[#F9E0D0] p-[20px] w-[500px] rounded-lg">
                        <p className="text-center text-3xl font-[750]">Here's how to do it!</p>
                        <p className="mt-5"><span className="text-2xl font-[650]">Step 1: </span><br />Click the Photo of the List of items to buy.</p>
                        <p className="mt-5"><span className="text-2xl font-[650]">Step 2: </span><br />Upload The image by clicking the upload button.</p>
                        <p className="mt-5"><span className="text-2xl font-[650]">Step 3: </span><br />Add message to the shopkeeper (optional) </p>
                        <p className="mt-5"><span className="text-2xl font-[650]">Step 4: </span><br />And its done.</p>
                    </div>
                    <div className="uploading flex flex-col gap-5">
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
                        <div className="text-area flex gap-5 bg-[#F9E0D0] rounded-lg p-5">
                            <textarea rows={10} cols={30} className="textarea resize-none border border-[#FD6507] rounded-lg p-5 h-[181px]" value={text} onChange={handleTextChange} placeholder="Enter Your Message here"></textarea>
                            <button className="text-white  mt-[5px] p-2 h-[50px] w-[auto] bg-[#FD6507] rounded-lg hover:bg-white hover:border-[#FD650B] hover:border-2 hover:text-[#FD650B] "onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link to={'/ShopSelection'}>
                        <button className="text-white  mt-[5px] p-2 h-[50px] w-[auto] bg-[#FD6507] rounded-lg hover:bg-white hover:border-[#FD650B] hover:border-2 hover:text-[#FD650B] ">Confirm Order</button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default PlaceOrder;