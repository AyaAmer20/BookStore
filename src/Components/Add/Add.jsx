import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../Add/Add.module.css';
import ResultCard from '../ResultCard/ResultCard';

const Add = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (search.trim() === '') return;
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then((response) => {
        if (response.data.items) {
          setBooks(response.data.items);
        } else {
          setBooks([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  return (
    <>
      <div className={style.input}>
        <input
          type="text"
          placeholder="Search a book..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {books.length > 0 && (
        <ul className={style.result}>
          {books.map((book) => (
            <li key={book.id}>
              <ResultCard book={book} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Add;
