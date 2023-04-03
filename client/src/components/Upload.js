import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Upload = () => {
  const [fileUpload, setUploadFile] = useState(null);
  const selectedFile = (e) => {
    console.log(e.target.files[0]);
    setUploadFile(e.target.files[0]);
  };

  const submitHandler = (e) => {
    // Prevent the form from reloading the page after submit
    e.preventDefault();
    // For Node / Express to accept the fields from your upload form the values must be appended in a FormData object
    const formData = new FormData();
    formData.append("filetoupload", fileUpload);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    // Include the formdata and config in the post request
    axios
      .post("http://localhost:8080/upload", formData, config)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form
        action="/upload"
        id="file_input"
        onChange={(e) => selectedFile(e)}
        encType="multipart/form-data"
      >
        <input type="file" className="form-control-file" name="filetoupload" />
        <button onClick={(e) => submitHandler(e)}>Submit</button>
      </form>
    </>
  );
};

export default Upload;
