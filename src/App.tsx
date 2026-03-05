import React from "react";
import { Github, Linkedin, Mail, Code2, GraduationCap, Terminal } from "lucide-react";

const App: React.FC = () => {
  const skills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">

      {/* Navigation */}
      <nav className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-indigo-600">
          UMainali<span className="text-slate-800">.</span>
        </div>

        <div className="flex gap-4">
          <a
            href="#contact"
            className="text-sm font-medium hover:text-indigo-600 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for work
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              Ujjwol
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            I'm a passionate{" "}
            <strong className="text-slate-800 font-semibold">
              Frontend Developer
            </strong>{" "}
            specializing in building modern web applications using React.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="mailto:your.email@example.com"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2"
            >
              <Mail size={20} /> Let's Talk
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-lg font-medium hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <Github size={20} /> GitHub
            </a>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="flex-1 relative">
          <div className="aspect-square max-w-sm mx-auto bg-gradient-to-tr from-indigo-100 to-blue-50 rounded-3xl overflow-hidden border border-slate-100 shadow-2xl flex items-center justify-center">
            <Terminal size={120} className="text-indigo-300" strokeWidth={1} />
          </div>
        </div>
      </header>

      {/* Skills + Education */}
      <section className="bg-white border-y border-slate-100 py-20">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                <GraduationCap size={24} />
              </div>

              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <h3 className="text-lg font-bold text-slate-900">
                Bachelor of Information Technology (BIT)
              </h3>

              <p className="text-slate-500 mt-2">
                Focused on software engineering, web development, and computer
                science fundamentals.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <Code2 size={24} />
              </div>

              <h2 className="text-2xl font-bold">Tech Stack</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium text-sm border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center text-center space-y-6"
      >
        <h2 className="text-2xl font-bold">Let's build something together.</h2>

        <div className="flex gap-6 text-slate-400">
          <a href="#" className="hover:text-indigo-600 transition-colors">
            <Github size={24} />
          </a>

          <a href="#" className="hover:text-indigo-600 transition-colors">
            <Linkedin size={24} />
          </a>

          <a href="#" className="hover:text-indigo-600 transition-colors">
            <Mail size={24} />
          </a>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Ujjwol Mainali. Crafted with React &
          Tailwind.
        </p>
      </footer>

    </div>
  );
};

export default App;