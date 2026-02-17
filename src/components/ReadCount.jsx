

function ReadCount(props) {
  return (
    <div className="bg-blue-50 rounded-xl p-4 mt-6 text-center shadow border border-blue-100">
      <h3 className="text-2xl font-semibold text-slate-500">Books Read: {props.count}</h3>
    </div>
  );
}

export default ReadCount;
