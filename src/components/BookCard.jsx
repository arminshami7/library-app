

import { Link } from 'react-router-dom';


function BookCard(props) {
  let b = props.book;
  return (
    <li className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg hover:shadow-xl p-5 flex flex-col items-center gap-3 m-2 border border-slate-200/60 transition-all duration-300 hover:-translate-y-1">
      <div className="relative group">
        <img 
          src={b.image} 
          alt={b.title} 
          className="w-28 h-28 object-cover rounded-xl mb-2 border-2 border-slate-200 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300" 
        />
        {b.isRead && (
          <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
            ✓
          </div>
        )}
      </div>
      <Link
        to={'/books/' + b.id}
        className="inline-block bg-gradient-to-r from-slate-500 to-slate-500 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg hover:from-slate-600 hover:to-slate-600 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-sm mb-1"
      >
        Details
      </Link>
      <div className="font-bold text-lg text-center text-slate-600">{b.title}</div>
      <label className="flex items-center gap-2 cursor-pointer select-none">
        <input 
          type="checkbox" 
          checked={!!b.isRead} 
          onChange={()=>props.onToggleRead(b.id)} 
          className="w-5 h-5 text-gray-300 rounded-md cursor-pointer accent-gray-500" 
        />
        <span className="text-sm text-slate-600 font-medium">Read</span>
      </label>
      <button 
        onClick={()=>props.onDeleteBook(b.id)} 
        className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-4 py-2 rounded-xl text-xs mt-1 hover:from-red-600 hover:to-rose-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
      >
        Delete
      </button>
    </li>
  );
}

export default BookCard;
