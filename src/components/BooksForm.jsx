import { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/booksSlice';

const BooksForm = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [state, setState] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newBook !== '' && newAuthor !== '') {
      dispatch(addBook({ title: newBook, author: newAuthor, id: uuid() }));
      setState(false);
      event.target.reset();
    } else {
      setState(true);
    }
  };
  const handleTitle = (event) => {
    if (event.target.value.trim() !== '') {
      setNewBook(event.target.value.trim());
    }
  };
  const handleAuthor = (event) => {
    if (event.target.value.trim() !== '') {
      setNewAuthor(event.target.value.trim());
    }
  };
  const handleError = () => (state ? 'Please add a name from the book and an author' : '');
  return (
    <div className="divForm">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book title" onChange={handleTitle} />
        <input type="text" placeholder="author" onChange={handleAuthor} />
        <button type="submit">Add book</button>
      </form>
      <p>{handleError()}</p>
    </div>
  );
};

export default BooksForm;
