import { Route, Routes, Link } from 'react-router-dom';
import Experience1 from './views/Experience1';

export function App() {
  return (
    <>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Experience1</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Experience1 />} />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
