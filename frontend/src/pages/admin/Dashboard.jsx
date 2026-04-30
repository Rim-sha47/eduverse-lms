const Dashboard = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-slate-900">
        Admin Dashboard 👑
      </h1>

      <p className="text-gray-600 mt-4">
        Welcome Admin! Here you can manage the whole EduVerse system.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-bold">Total Users</h2>
          <p className="text-cyan-500 text-2xl mt-2">120</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-bold">Total Courses</h2>
          <p className="text-cyan-500 text-2xl mt-2">45</p>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-xl font-bold">Revenue</h2>
          <p className="text-cyan-500 text-2xl mt-2">$5,200</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;