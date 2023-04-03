import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Upload = () => {
  const [fileUpload, setUploadFile] = useState(null);
  const selectedFile = (e) => {
    // e.preventDefault();
    console.log(e);
    console.log(e.target.files[0]);
    setUploadFile(e.target.files[0]);
  };

  const submitHandler = (e) => {
    // e.preventDefault();
    // console.log(document.querySelector("#fileInput"));
    // const { data } = axios.post("http://localhost:8080/upload", fileUpload, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
    e.preventDefault();
    console.log(fileUpload);
    console.log("inside Upload route -------");

    const formData = new FormData();
    formData.append("name", fileUpload.name);
    formData.append("lastModified", fileUpload.lastModified);
    formData.append("size", fileUpload.size);
    formData.append("type", fileUpload.type);

    console.log(formData);
    axios
      .post("http://localhost:8080/upload", formData)
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
        method="post"
        id="file_input"
        onChange={(e) => selectedFile(e)}
        encType="multipart/form-data"
      >
        <input type="file" className="form-control-file" name="filetoupload" />
        {/* <input
          type="submit"
          value="Get me the stocks!"
          className="btn btn-default"
        /> */}
        <button onClick={(e) => submitHandler(e)}>Submit</button>
      </form>
    </>
  );
};

export default Upload;
