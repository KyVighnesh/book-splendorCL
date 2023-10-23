import { useState, useEffect } from "react";
import "./App.css";
import { books } from "./components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import EditForm from "./components/EditForm";
import Book from "./components/Book";

function App() {
  const [count, setCount] = useState(0);
  const [booksData, setBooksData] = useState([]);
  const [singBookId, setSingBookId] = useState(0);
  useEffect(() => {
    setBooksData([...books]);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              booksData={booksData}
              setBooksData={setBooksData}
              singBookId={singBookId}
              setSingBookId={setSingBookId}
            />
          }
        />
        <Route
          path="/form"
          element={<Form booksData={booksData} setBooksData={setBooksData} />}
        />
        <Route
          path="/editform"
          element={
            <EditForm
              booksData={booksData}
              setBooksData={setBooksData}
              singBookId={singBookId}
            />
          }
        />
        <Route path="/book/:id" element={<Book booksData={booksData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
