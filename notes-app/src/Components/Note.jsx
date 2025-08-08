const Note = ({ note, deleteNote }) => {
  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md border-l-4"
      style={{
        borderColor:
          note.priority === "🔴 High"
            ? "#e53e3e"
            : note.priority === "🟠 Medium"
            ? "#ed8936"
            : "#38a169",
      }}
    >
      <h3 className="text-lg font-bold">
        {note.title}{" "}
        <span className="text-sm text-gray-500">({note.priority})</span>
      </h3>
      <p className="text-sm text-gray-600">
        <strong>Category:</strong> {note.category}
      </p>
      <p className="mt-2">{note.description}</p>

      <button
        onClick={() => deleteNote(note.id)}
        className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
      >
        🗑️ Delete Note
      </button>
    </div>
  );
};

export default Note;
