import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { books } from "./List";

const Home = ({ booksData, setBooksData, singBookId, setSingBookId }) => {
  const navigate = useNavigate();
  const [bData, setBData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setBData([...booksData]);
  }, []);
  return (
    <div>
      <div className="navb ">
        <h1 className="title">Books details</h1>
        <button
          onClick={() => {
            navigate("form");
          }}
          style={{ height: "36px" }}
        >
          Add book
        </button>
        <input
          type="text"
          style={{ height: "36px" }}
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            let b = booksData.filter((ele, id) => {
              return ele.title.includes(e.target.value);
            });
            setBooksData(b);
            if (e.target.value == "") {
              setBooksData(books);
            }
          }}
        />
      </div>
      <div className="main">
        <Table>
          <tr>
            <th>id</th>
            <th>Book image</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
          {booksData.map((ele, ind) => {
            return (
              <tr
                key={ind + ele.title}
                onClick={() => {
                  navigate(`book/${ele.id}`);
                }}
              >
                <td>{ele.id}</td>
                <td>
                  <img style={{ height: 200, width: 200 }} src={ele.link} />
                </td>
                <td>{ele.title}</td>
                <td>{ele.author}</td>
                <td>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSingBookId(ele.id);
                      setTimeout(() => {
                        navigate("/editform");
                      }, 200);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      let bk = booksData.filter((book) => book.id != ele.id);
                      setBooksData([...bk]);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </Table>
      </div>
    </div>
  );
};

export default Home;
