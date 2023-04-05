import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BooksForm from './BooksForm';
import { fetchData } from '../redux/books/booksSlice';

const Logic = () => {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  useEffect(
    () => {
      dispatch(fetchData());
    }, [dispatch],
  );

  const showBooks = () => {
    if (books.length === 0) {
      return (
        <ul>
          <li>No books in this moments</li>
        </ul>
      );
    }
    return (
      <div>
        { books.map((book) => (
          <ul key={book.id}>
            <li>
              {' '}
              name =
              {book.name}
            </li>
            <li>
              {' '}
              author=
              {book.author}
            </li>
          </ul>
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      {showBooks()}
      <BooksForm books={books} setBooks={setBooks} />
    </div>
  );
};

export default Logic;
