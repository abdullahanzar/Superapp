import './App.css';
import SignUp from './Pages/Sign Up Page/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/category-page" element={<h1>HELLO</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
