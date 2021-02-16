import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Books() {
  const [books, setBooks] = useState([]);
  console.log(books);

  useEffect(() => {
    axios
      .get("/wp-json/wp/v2/books")
      .then((res) => setBooks({ books: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {books.books ? (
        books.books.map((book, i) => (
          <div key={i}>
            <h2>{book.title.rendered}</h2>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}{" "}
    </div>
  );
}
