const Users = () => {
  const users = [
    { name: "Ali", email: "ali@test.com", role: "student" },
    { name: "Sara", email: "sara@test.com", role: "instructor" },
    { name: "Ahmed", email: "ahmed@test.com", role: "student" },
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Manage Users</h1>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3 capitalize text-cyan-600">
                  {user.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;