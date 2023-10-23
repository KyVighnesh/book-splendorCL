import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditForm = ({ booksData, setBooksData, singBookId }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    author: "",
    link: "",
    id: "",
  });
  useEffect(() => {
    let b = booksData.filter((ele) => ele.id == singBookId);
    setData({
      title: b[0].title,
      author: b[0].author,
      link: b[0].link,
      id: b[0].id,
    });
  }, []);
  return (
    <div className="main m">
      <h1>Edit book Details</h1>
      <br />
      <br />
      <br />
      <label htmlFor="">Title: &nbsp;</label>
      <input
        type="text"
        placeholder="enter title"
        value={data.title}
        onChange={(e) => {
          setData({ ...data, title: e.target.value });
          console.log(data);
        }}
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
      <label htmlFor="">Img Link: &nbsp;</label>
      <input
        type="text"
        placeholder="enter image link"
        value={data.link}
        onChange={(e) => setData({ ...data, link: e.target.value })}
      />
      <br />
      <br />
      <button
        onClick={() => {
          if (data.title != "" || data.author != "" || data.link != "") {
            let bData = booksData.filter((book, i) => {
              if (book.id == singBookId) {
                book.id = data.id;
                book.title = data.title;
                book.link = data.link;
                book.author = data.author;
                return book;
              }
              return book;
            });
            setBooksData([...bData]);
            navigate("/");
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default EditForm;
