import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksList from "./BooksList";

export default function Books() {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    axios
      .get("/wp-json/wp/v2/books")
      .then((res) => setBooks({ books: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {books.books ? (
        books.books.map((book, i) => <BooksList key={i} book={book} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


 
