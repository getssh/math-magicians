import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import RandQuote from './components/quote/quote';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="RandQuote" element={<RandQuote />} />
        <Route path="*" element={<h3>Page not found</h3>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
