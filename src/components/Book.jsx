import React, { useEffect, useState } from "react";
import { books } from "./List";
import { useParams } from "react-router-dom";

const Book = ({ booksData }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    let b = books.filter((ele, i) => ele.id == id);
    setData(b[0]);
  }, []);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vw",
        background: "lightblue",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>Book Details</h1>
        <br />
        <br />
        <br />
        <div>
          <h3>Title : {data.title}</h3>
          <h3>Author : {data.author}</h3>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }}>Book Image</h3>
          <img height={200} src={data.link} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Book;
