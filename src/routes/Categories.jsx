import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.categories);

  return (
    <div className="construction">
      <h1>
        {message.message}
      </h1>
      <button
        type="button"
        onClick={() => { dispatch(checkStatus); }}
      >
        Check
      </button>
    </div>
  );
};

export default Categories;
