import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Upload = () => {
  const [file, setUploadFile] = useState(null);
  const submithandler = (e) => {
    e.preventDefault();
    console.log(e);
    setUploadFile(e.target[0].value);
  };

  useEffect(() => {
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
        onSubmit={(e) => submithandler(e)}
        action="/upload"
        method="post"
        encType="multipart/form-data"
      >
        <input type="file" id="file" name="filetoupload" />
        <input type="submit" />
      </form>
    </>
  );
};

export default Upload;
