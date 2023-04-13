import './App.css';
import SignUp from './Pages/Sign Up Page/SignUp'
import CategoryPage from './Pages/Category Page/CategoryPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/category-page" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
