const Dashboard = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-slate-900">
        Student Dashboard 🎓
      </h1>

      <p className="text-gray-600 mt-3">
        Welcome Student! Track your learning progress here.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-bold">Enrolled Courses</h2>
          <p className="text-cyan-500 text-2xl mt-2">5</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-bold">Completed</h2>
          <p className="text-cyan-500 text-2xl mt-2">2</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-bold">Progress</h2>
          <p className="text-cyan-500 text-2xl mt-2">60%</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;