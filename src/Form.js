import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("data");
  const [file, setFile] = useState("");

  const onChangeInputHandler = (e) => {
    setName(e.target.value);
  };
  const onChangeFileHandler = (e) => {
    setFile(e.target.files[0]);
  };
  const onSubmitHandler = (e) => {
    // fetch post request to localhost:3001/users
    const data = {
      name,
      file,
    };
    fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(data.name),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input onChange={onChangeInputHandler} value={name} type="text" />
        <br />
        <input onChange={onChangeFileHandler} type="file" name="" id="" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
