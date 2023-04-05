import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({ title, id, author }) => {
  const dispatch = useDispatch();
  return (
    <ul>
      <li>
        {' '}
        name=
        {title}
      </li>
      <li>
        {' '}
        author=
        {author}
      </li>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteBook(id));
        }}
      >
        Remove
      </button>
    </ul>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
