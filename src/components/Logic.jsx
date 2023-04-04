import { useSelector, useDispatch } from 'react-redux';
import BooksForm from './BooksForm';
import { removeBook } from '../redux/books/booksSlice';

const Logic = () => {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();

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
          <ul key={book.title}>
            <li>
              {' '}
              name=
              { book.title}
            </li>
            <li>
              {' '}
              author=
              { book.author}
            </li>
            <button
              type="button"
              onClick={() => {
                dispatch(removeBook(book.item_id));
              }}
            >
              Remove
            </button>
          </ul>
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
