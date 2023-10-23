import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ booksData, setBooksData }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    author: "",
    link: "",
    id: booksData.length + 1,
  });
  return (
    <div className="main m">
      <h1>Add new Book</h1>
      <br />
      <br />
      <br />
      <label htmlFor="">Title: &nbsp;</label>
      <input
        type="text"
        placeholder="enter title"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <br />
      <br />
      <label htmlFor="">Author: &nbsp;</label>
      <input
        type="text"
        placeholder="enter Author"
        value={data.author}
        onChange={(e) => setData({ ...data, author: e.target.value })}
      />
      <br />
      <br />
      <label htmlFor="">Img link: &nbsp;</label>
      <input
        type="text"
        placeholder="enter image link"
        value={data.link}
        onChange={(e) => setData({ ...data, link: e.target.value })}
      />
      <br />
      <button
        onClick={() => {
          if (data.title != "" || data.author != "" || data.link != "") {
            setBooksData([...booksData, data]);
            setData({ ...data, title: "", author: "", link: "" });
            navigate("/");
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
