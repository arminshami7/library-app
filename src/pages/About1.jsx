export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl font-bold mb-2">Library App</h1>
          <p className="text-xl text-gray-500 mb-4">Personal Book Collection Manager</p>
          <div className="flex justify-center gap-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">LocalStorage</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-gray-600 leading-relaxed">
            A React-based web application for managing your personal book collection.
          </p>
        </div>
      </div>
    </div>
  );
}
