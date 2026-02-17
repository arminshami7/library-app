
import React from 'react';




import { useState, useRef } from 'react';

function BookForm(props) {
  const [t, setT] = useState('');
  const [img, setImg] = useState('');
  const fileInputRef = useRef();

  function tChange(e) {
    setT(e.target.value);
  }

  function imgChange(e) {
    let f = e.target.files[0];
    if (f) {
      setImg(URL.createObjectURL(f));
    } else {
      setImg('');
    }
  }

  function sub(e) {
    e.preventDefault();
    if (t === '') {
      alert('no title');
      return;
    }
    let b = {
      id: Math.random(),
      title: t,
      image: img
    };
    if (props.onAddBook) {
      props.onAddBook(b);
    }
    setT('');
    setImg('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  return (
    <form onSubmit={sub} className="max-w-md mx-auto bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-sm flex flex-col gap-5 mt-6 border border-slate-200/60 backdrop-blur-sm">
      <h2 className="text-3xl font-2xl text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">Add Book</h2>
      
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 ml-1 flex items-center gap-2">
          Book Cover
        </label>
        <input
          type="file"
          onChange={imgChange}
          className="block w-full text-sm text-slate-600 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer bg-slate-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-blue-50/30 p-3 transition-all duration-300 hover:border-slate-500 hover:bg-slate-100"
          ref={fileInputRef}
        />
      </div>
      
      <div className="space-y-2">
        <label className=" text-sm font-semibold text-slate-700 ml-1 flex items-center gap-2">
          Book Name
        </label>
        <input
          type="text"
          value={typeof t === 'string' ? t : ''}
          onChange={tChange}
          placeholder="Enter book name..."
          className="block w-full border-2 border-slate-200 rounded-xl p-3 text-base  bg-slate-50/50 transition-all duration-300 shadow-sm hover:shadow-md "
        />
      </div>
      
      <button className="mt-2 bg-gradient-to-r from-gray-400/50 to-gray-400/80 text-white font-semibold px-6 py-3 rounded-lg hover:from-gray-400 hover:to-gray-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm  text-lg">
        Add Book
      </button>
    </form>
  );
}

export default BookForm;
