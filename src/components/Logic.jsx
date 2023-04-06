import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BooksForm from './BooksForm';
import Book from './Book';
import { fetchData } from '../redux/books/booksSlice';

const Logic = () => {
  const dispatch = useDispatch();
  const { books, counter } = useSelector((store) => store.books);

  useEffect(
    () => {
      dispatch(fetchData());
    }, [dispatch, counter],
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
      <div className="booksHolder">
        {Object.keys(books).map((item) => (
          <Book
            key={item}
            title={books[item][0].title}
            id={item}
            author={books[item][0].author}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      {showBooks()}
      <BooksForm />
    </div>
  );
};

export default Logic;
