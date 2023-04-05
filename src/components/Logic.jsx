import { useSelector, useEffect } from 'react-redux';
import { useDispatch } from 'react-redux';
import BooksForm from './BooksForm';
import Book from './Book';
import { fetchData } from '../redux/books/booksSlice';

const Logic = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);
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
        {books.map((book) => (
          <Book
            key={book.title}
            id={book.id}
            title={book.title}
            author={book.author}
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
