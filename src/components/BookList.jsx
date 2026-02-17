


import BookCard from './BookCard';



function BookList(props) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 bg-slate-0">
      {props.books.map(function(b) {
        return <BookCard key={b.id} book={b} onToggleRead={props.onToggleRead} onDeleteBook={props.onDeleteBook} />
      })}
    </ul>
  );
}

export default BookList;
