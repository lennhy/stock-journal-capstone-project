import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Upload = () => {
  const [file, setUploadFile] = useState(null);

  const selectedFile = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.files[0]);
    setUploadFile(e.target.files[0]);
  };

  const submitHandler = (e) => {};

  useEffect(() => {
    console.log(file);

    axios
      .post("http://localhost:8080/upload", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: file,
      })

      .then((response) => {
        console.log(response);
      });
  }, [file]);

  return (
    <>
      <form
        onChange={(e) => selectedFile(e)}
        action="/upload"
        method="post"
        encType="multipart/form-data"
      >
        <input type="file" id="file" name="filetoupload" />
        {/* <input type="submit" /> */}
        <button onClick={() => submitHandler()}>Upload</button>
      </form>
    </>
  );
};

export default Upload;
