const MyCourses = () => {
  const courses = [
    { title: "React JS Mastery", progress: "70%" },
    { title: "MERN Stack", progress: "40%" },
    { title: "Python Basics", progress: "90%" },
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">My Courses 📚</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-xl"
          >
            <h2 className="text-xl font-bold mb-2">
              {course.title}
            </h2>

            <p className="text-gray-600">
              Progress: {course.progress}
            </p>

            <div className="w-full bg-gray-200 h-2 mt-3 rounded">
              <div
                className="bg-cyan-500 h-2 rounded"
                style={{ width: course.progress }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;