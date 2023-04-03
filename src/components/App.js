import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../routes/Home';
import Categories from '../routes/Categories';
import NotMatch from '../routes/NotMatch';
import '../styles/App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Categories" element={<Categories />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);

export default App;
