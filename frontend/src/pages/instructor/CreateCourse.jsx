import { useState } from "react";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Course Created: ${title}`);
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Create New Course 📚
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-xl"
      >
        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        <textarea
          placeholder="Course Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        ></textarea>

        <button
          type="submit"
          className="bg-cyan-500 text-white px-6 py-3 rounded-lg w-full"
        >
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;