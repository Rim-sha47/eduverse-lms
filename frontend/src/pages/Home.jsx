const Home = () => {
  return (
    <section className="bg-slate-950 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-cyan-400 mb-3">Modern Learning Platform</p>

          <h1 className="text-6xl font-bold leading-tight">
            Learn Any Skill
            <span className="text-cyan-400"> Anytime</span>
          </h1>

          <p className="mt-6 text-slate-300 text-lg">
            Join Rimsha EduVerse and explore premium courses
            in programming, business, design and more.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-cyan-500 px-6 py-3 rounded-xl">
              Explore Courses
            </button>

            <button className="border border-slate-700 px-6 py-3 rounded-xl">
              Get Started
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl h-96 shadow-2xl"></div>
      </div>
    </section>
  );
};

export default Home;