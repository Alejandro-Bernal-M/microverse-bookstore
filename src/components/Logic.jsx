import { useSelector } from 'react-redux';
import BooksForm from './BooksForm';
import Book from './Book';

const Logic = () => {
  const books = useSelector((store) => store.books);

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
