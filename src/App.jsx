
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home1';
import About from './pages/About1';
import Navbar from './pages/Navbar';
import BookDetail from './pages/Bookdetail';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-slate-100">
      <BrowserRouter basename='library-app'>
        <Navbar />
        <main className="flex flex-col items-center justify-center w-full">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/books/:id' element={<BookDetail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App;
