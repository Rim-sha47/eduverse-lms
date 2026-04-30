const CourseCard = ({ title, instructor, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl duration-300">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>

      <p className="text-gray-600 mb-2">
        Instructor: {instructor}
      </p>

      <p className="text-cyan-600 font-bold text-xl mb-4">
        ${price}
      </p>

      <button className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseCard;