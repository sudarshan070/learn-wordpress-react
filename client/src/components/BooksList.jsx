import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "react-type";

function BooksList({ book }) {
  const [imgURL, setImgURL] = useState("");
  const [author, setAuthor] = useState("");
  console.log(imgURL);
  console.log(author);

  useEffect(() => {
    const { author, featured_media } = book;

    let getImgUrl = axios.get(`/wp-json/wp/v2/media/${featured_media}`);

    let getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);

    Promise.all([getImgUrl, getAuthor]).then((res) => {
      setImgURL({ imgURL: res[0].data.media_details.sizes.full.source_url });
      setAuthor({ author: res[1].data.name });
    });
  }, [book]);

  return (
    <div>
      <h2>{book.title.rendered}</h2>
      <small>
        Review by <strong>{author.author}</strong>
      </small>
      <img src={imgURL.imgURL} alt={book.title.rendered} />
      <div dangerouslySetInnerHTML={{ __html: book.excerpt.rendered }}></div>
    </div>
  );
}

BooksList.propTypes = {
  book: PropTypes.object,
};

export default BooksList;
