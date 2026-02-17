
import { useState, useEffect } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import ReadCount from '../components/ReadCount';

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let b = localStorage.getItem('my-library');
    if (b) setBooks(JSON.parse(b));
  }, []);

  useEffect(() => {
    localStorage.setItem('my-library', JSON.stringify(books));
  }, [books]);

  function handleAddBook(newBook) {
    setBooks(books.concat([newBook]));
  }

  function handleToggleRead(id) {
    let arr = books.map(function(x) {
      if (x.id === id) {
        x = {...x, isRead: !x.isRead};
      }
      return x;
    });
    setBooks(arr);
  }

  function handleDeleteBook(id) {
    setBooks(books.filter(function(x) { return x.id !== id; }));
  }

  let readBooksCount = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i] && books[i].isRead) readBooksCount++;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 p-6">
      <div className="max-w-4xl mx-auto mb-8">
          <BookForm onAddBook={handleAddBook} />
        </div>
        <BookList books={books} onToggleRead={handleToggleRead} onDeleteBook={handleDeleteBook} />
        <ReadCount count={readBooksCount} />
      </div>
    
  );
}

export default Home;
