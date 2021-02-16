import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function BookReview() {
  const [book, setBook] = useState({});
  console.log(book);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/wp-json/wp/v2/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Link to="/"> Back </Link>
      <hr />
      {book ? (
        <div>
          <h2>{book.title ? book.title.rendered : ""}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: book.content ? book.content.rendered : "",
            }}
          ></div>
        </div>
      ) : (
        <h3>Loading..</h3>
      )}
    </>
  );
}
