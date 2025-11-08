import React from "react";
import style from "../ResultCard/ResultCard.module.css";

const ResultCard = ({ book }) => {
  const info = book.volumeInfo;

  return (
    <>
      <div className={style.ResultCard}>
        <div className={style.poster_Wrapper}>
          {info.imageLinks && info.imageLinks.thumbnail ? (
            <img
              src={info.imageLinks.thumbnail}
              alt={info.title || "Book cover"}
            />
          ) : (
            <div className={style.filter_Poster}></div>
          )}

          <div className={style.info}>
            <div className={style.heading}>
              <h3 className={style.title}>
                {info.title ? info.title : "Unknown Title"}
              </h3>
              <h4 className={style.release_date}>
                {info.publisher ? info.publisher : "Unknown Publisher"}
              </h4>
            </div>

            {info.authors && (
              <p className={style.authors}>
                <strong>Author:</strong> {info.authors.join(", ")}
              </p>
            )}

            {info.publishedDate && (
              <p className={style.date}>
                <strong>Published:</strong> {info.publishedDate}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
