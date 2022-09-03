import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>

  );
}

export default App;
