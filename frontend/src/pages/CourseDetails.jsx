const CourseDetails = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white py-10 px-6">

      <div className="max-w-5xl mx-auto bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="course"
          className="w-full h-72 object-cover"
        />

        {/* Content */}
        <div className="p-8">

          {/* Title */}
          <h1 className="text-3xl font-bold text-purple-500 mb-2">
            React JS Mastery 🚀
          </h1>

          <p className="text-gray-300 mb-6">
            Learn React from beginner to advanced level with real projects and hands-on practice.
          </p>

          {/* Course Info */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">

            <div className="bg-slate-800 p-4 rounded-xl">
              <h3 className="text-cyan-400 font-bold">Instructor</h3>
              <p className="text-white">Rimsha Riaz</p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              <h3 className="text-cyan-400 font-bold">Price</h3>
              <p className="text-white">$49</p>
            </div>

          </div>

          {/* Lessons */}
          <h2 className="text-2xl font-bold mb-3 text-purple-400">
            Course Content
          </h2>

          <ul className="space-y-2 text-gray-300 mb-6">
            <li>✔ JSX & Components</li>
            <li>✔ Props & State</li>
            <li>✔ Hooks (useState, useEffect)</li>
            <li>✔ Routing</li>
            <li>✔ Final Project</li>
          </ul>

          {/* Button */}
          <button className="w-full bg-cyan-500 text-white py-3 rounded-xl hover:bg-cyan-600 transition">
            Enroll Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;