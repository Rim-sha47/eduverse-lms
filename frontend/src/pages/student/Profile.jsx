const Profile = () => {
  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">My Profile 👤</h1>

      <div className="bg-white shadow-lg p-6 rounded-xl">
        <div className="space-y-4">
          <p><strong>Name:</strong> RIMSHA</p>
          <p><strong>Email:</strong> rimshariaz327@gmail.com</p>
          <p><strong>Role:</strong> Student</p>
        </div>

        <button className="mt-6 bg-cyan-500 text-white px-6 py-2 rounded-lg">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;