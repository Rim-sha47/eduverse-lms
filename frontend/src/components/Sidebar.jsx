import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        Dashboard
      </h2>

      <ul className="space-y-4">
        <li>
          <Link to="/student/dashboard" className="hover:text-cyan-400">
            Student Dashboard
          </Link>
        </li>

        <li>
          <Link to="/student/mycourses" className="hover:text-cyan-400">
            My Courses
          </Link>
        </li>

        <li>
          <Link to="/instructor/dashboard" className="hover:text-cyan-400">
            Instructor Panel
          </Link>
        </li>

        <li>
          <Link to="/admin/dashboard" className="hover:text-cyan-400">
            Admin Panel
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;