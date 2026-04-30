import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-24 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Learn Skills For Your Future 🚀
      </h1>

      <p className="text-lg text-gray-300 mb-8">
        Join thousands of students learning web development, design & more.
      </p>

      <Link
        to="/courses"
        className="bg-cyan-500 px-6 py-3 rounded-xl text-lg hover:bg-cyan-600"
      >
        Explore Courses
      </Link>
    </section>
  );
};

export default Hero;