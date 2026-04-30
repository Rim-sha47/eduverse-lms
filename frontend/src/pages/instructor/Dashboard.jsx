const Dashboard = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-slate-900">
        Instructor Dashboard 👨‍🏫
      </h1>

      <p className="text-gray-600 mt-3">
        Welcome Instructor! Manage your courses and students here.
      </p>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-bold">My Courses</h2>
          <p className="text-cyan-500 text-2xl mt-2">8</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-bold">Students</h2>
          <p className="text-cyan-500 text-2xl mt-2">120</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-bold">Earnings</h2>
          <p className="text-cyan-500 text-2xl mt-2">$1,200</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;