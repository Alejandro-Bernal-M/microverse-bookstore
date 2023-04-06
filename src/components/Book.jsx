import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({ title, id, author }) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="bookInfo">
        <h4 className="bookCategory">
          category
        </h4>
        <h2 className="bookTitle">
          {title}
        </h2>
        <h6 className="bookAuthor">
          {author}
        </h6>
        <div className="bookbtns">
          <button
            type="button"
            className="bookBtn"
          >
            Comment
          </button>
          <div className="verticalDivisor" />
          <button
            type="button"
            className="bookBtn"
            onClick={() => {
              dispatch(deleteBook(id));
            }}
          >
            Remove
          </button>
          <div className="verticalDivisor" />
          <button
            type="button"
            className="bookBtn"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-circular">
          <div className="circular" />
        </div>
        <div className="progress-stats">
          <p className="percent">
            60%
          </p>
          <p className="completed">
            completed
          </p>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter">
          <div>
            <p className="chapter-label">
              CURRENT CHAPTER
            </p>
            <p className="chapter">
              Unknow
            </p>
          </div>
          <div>
            <button
              type="button"
              className="progress-btn"
            >
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
