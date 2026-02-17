
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';


function BookDetail() {
	const { id } = useParams();
	const [books] = useState(() => {
		let b = localStorage.getItem('my-library');
		if (b) return JSON.parse(b);
		return [];
	});
	const book = books.find(b => b.id == id);

	if (!book) {
		return (
			<div className="p-8 max-w-lg mx-auto bg-white rounded-xl shadow border border-red-200 mt-8 text-center">
				<div className="text-red-600 text-lg font-semibold mb-2">Book not found!</div>
				<Link to="/" className="text-blue-600 hover:text-blue-800">Back</Link>
			</div>
		);
	}

	return (
		<div className="p-8 max-w-lg mx-auto bg-white rounded-xl shadow border border-slate-200 mt-8 text-center">
			<h2 className="text-2xl font-bold mb-4 text-gray-500">{book.title}</h2>
			<img src={book.image} alt={book.title} className="w-40 h-40 object-cover rounded-lg mb-6 border border-slate-200 mx-auto" />
			<Link to="/" className="text-blue-600 hover:text-blue-800 hover:bg-blue-600/20 bg-blue-300/20 px-2 py-1 rounded-lg">Back</Link>
		</div>
	);
}

export default BookDetail;
