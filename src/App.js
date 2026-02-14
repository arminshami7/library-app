import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputImageValue, setInputImageValue] = useState();
  const fileInputRef = useRef(null);

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleInputImageValue = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setInputImageValue(imgUrl)
    }
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    if(inputValue.trim() === "")
      return;

    if(books.some(book => book.title === inputValue)){
      alert("کتاب تکراری است");
    return;
    }

    const newBook = {
      id : Number(Date.now()),
      title : inputValue,
      isRead : false,
      image : inputImageValue
    }

    setBooks([...books, newBook]);
    setInputValue("");
    fileInputRef.current.value = "";
  };

  const handleToggleRead = (id) => {
  const newList = books.map((book) => {
      if(book.id === id){
        return {...book, isRead : !book.isRead}
      }
      else {
        return book;
      }
    })
    setBooks(newList)
  };

  const handleDeleteBook = (id) => {
    const newList = books.filter((book)=> book.id !== id
    )
    setBooks(newList)
  };

  const readBooksCount = books.filter(book => book.isRead).length;
  
  return (
    <div className="app">
    <div className="container">

    <form onSubmit={handleAddBook} className="form">
      <h1 className="title">my library app</h1>
      <input 
        type="file" 
        accept="image/*" 
        required 
        onChange={handleInputImageValue}
        className="file-input"
        ref={fileInputRef}
      />
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputValue} 
        placeholder="write the name of book"
        className="input"
      />
      <button type="submit" className="btn">Add Book</button>
      </form>
      
        <ul className="book-list">
        {books.map((book)=> {return(
          <li key={book.id} className="book-item">
          <img src={book.image} alt={book.title} className="book-img" />
          <span className="book-title">{book.title}</span>
          <input 
            type="checkbox" 
            checked={book.isRead} 
            onChange={()=>handleToggleRead(book.id)}
          />
          <button 
            onClick={()=>handleDeleteBook(book.id)}
            className="delete-btn"
          >
            Delete
          </button>
          </li>
          )})}
          
      </ul>
      
    

      <div className="read-count">
        <h3>Read: {readBooksCount}</h3>
      </div>
    
    </div>
    </div>
  );
}

export default App;
