import { useState } from "react";
import InputField from "./inputs/InputField";
import SelectField from "./inputs/SelectField";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "🟠 Medium",
    category: "🏠 Personal",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const priorities = ["🟢 Low", "🟠 Medium", "🔴 High"];
  const categories = ["🏢 Work", "🏠 Personal", "🆘 Urgent"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) return;

    const newNote = { id: Date.now(), ...formData };

    setNotes([newNote, ...notes]);

    setFormData({
      title: "",
      priority: "🟠 Medium",
      category: "🏠 Personal",
      description: "",
    });
    e.target.reset();
  };

  return (
    <>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide form ❌" : "Add new note ➕"}
      </button>
      {isFormVisible && (
        <form className="mb-4" onSubmit={handleSubmit}>
          <InputField
            value={formData.title}
            onChange={handleChange}
            display="Title"
            name="title"
          />
          <SelectField
            value={formData.priority}
            onChange={handleChange}
            display="Priority"
            options={priorities}
            name="priority"
          />
          <SelectField
            value={formData.category}
            onChange={handleChange}
            display="Category"
            options={categories}
            name="category"
          />
          <InputField
            value={formData.description}
            onChange={handleChange}
            display={"Description"}
            name="description"
          />
          <button className="w-full bg-purple-500 text-white mt-4 py-2 rounded-lg cursor-pointer hover:bg-neutral-900">
            📝 Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
