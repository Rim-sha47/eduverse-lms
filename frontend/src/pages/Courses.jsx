import CourseCard from "../components/CourseCard";

const Courses = () => {
  const courses = [
    { title: "React From Zero to Pro", instructor: "Rimsha Riaz", price: 49},
{ title: "Full MERN Masterclass", instructor: "Expert Mentor", price: 79 },
{ title: "Python Programming Bootcamp", instructor: "Coding Academy", price: 39 },
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        All Courses 📚
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;