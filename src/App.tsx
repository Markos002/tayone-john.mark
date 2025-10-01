import { projects } from './data/projects';
import { skills } from './data/skills';
import { education } from './data/education';
import { stats } from './data/stats';
import { personalInfo} from './data/personal';
import MyImage from './assets/JMT.jpg';

export default function App() {
    return (
        <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
            {/* Header */}
            <header className="bg-[#161b22] border-b border-[#21262d] sticky top-0 z-50">
                <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                    <a href="#" className="text-xl font-semibold text-[#58a6ff]">
                        John Mark Tayone
                    </a>
                    <ul className="flex gap-6">
                        {['Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-sm hover:text-[#58a6ff] transition-colors"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-8 py-20">
                <div className="flex items-center gap-16 flex-col md:flex-row">
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold text-white mb-4">
                            {personalInfo.name}
                        </h1>
                        <p className="text-2xl text-[#8b949e] mb-6">
                            Backend Developer & DevOps
                        </p>
                        <p className="text-base mb-8 leading-relaxed">
                            I build reliable and scalable digital experiences behind the scenes. Passionate about clean architecture,
                            efficient APIs, and deploying rock-solid backend systems that power modern web applications.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-[#238636] text-white rounded-md hover:bg-[#2ea043] transition-colors font-medium text-sm"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-transparent border border-[#30363d] rounded-md hover:bg-[#21262d] transition-colors font-medium text-sm"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#238636] to-[#58a6ff] flex items-center justify-center text-8xl border-4 border-[#21262d]">
                        <img src={MyImage} className="w-64 h-64 rounded-full object-cover object-right-top"/>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-[#161b22] border-y border-[#21262d] py-10">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-semibold text-[#58a6ff] mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm text-[#8b949e]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="max-w-7xl mx-auto px-8 py-20">
                <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-[#8b949e] mb-12">Here are some of my recent works</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] hover:-translate-y-1 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <svg className="w-5 h-5 text-[#8b949e]" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                                </svg>
                                <h3 className="text-lg font-semibold text-[#58a6ff]">
                                    {project.title}
                                </h3>
                            </div>
                            <p className="text-sm text-[#8b949e] mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-[#1f6feb] text-white px-3 py-1 rounded-full text-xs"
                                    >
                                    {tag}
                                  </span>
                                ))}
                            </div>
                            <div className="flex gap-4 text-xs text-[#8b949e]">
                                <span>⭐ {project.stars}</span>
                                <span>🔀 {project.forks}</span>
                                <span>● {project.language}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="bg-[#161b22] border-y border-[#21262d] py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Skills & Technologies</h2>
                    <p className="text-[#8b949e] mb-12">Technologies I work with</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl text-white mb-4 font-semibold">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.frontend.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#21262d] px-4 py-2 rounded-md text-sm border border-[#30363d]"
                                    >
                                                 {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl text-white mb-4 font-semibold">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.backend.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#21262d] px-4 py-2 rounded-md text-sm border border-[#30363d]"
                                    >
                                    {skill}
                                  </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl text-white mb-4 font-semibold">Tools & Others</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.tools.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#21262d] px-4 py-2 rounded-md text-sm border border-[#30363d]"
                                    >
                                    {skill}
                                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="max-w-7xl mx-auto px-8 py-20">
                <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
                <p className="text-[#8b949e] mb-12">My academic background</p>

                <div className="relative pl-10">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#238636] to-[#1f6feb]"></div>

                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="relative mb-12 bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff] hover:translate-x-1 transition-all"
                        >
                            <div className="absolute -left-[47px] top-6 w-3 h-3 bg-[#238636] border-4 border-[#0d1117] rounded-full"></div>

                            <div className="flex justify-between items-start flex-wrap gap-3 mb-3">
                                <h3 className="text-xl text-white font-semibold">
                                    {edu.degree}
                                </h3>
                                <span className="bg-[#1f6feb] text-white px-3 py-1 rounded-full text-xs font-medium">
                              {edu.year}
                            </span>
                            </div>

                            <p className="text-[#58a6ff] mb-2">{edu.school}</p>
                            <p className="text-sm text-[#8b949e] mb-4 leading-relaxed">
                                {edu.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {edu.achievements.map((achievement, i) => (
                                    <span
                                        key={i}
                                        className="bg-[#21262d] text-[#58a6ff] px-3 py-1.5 rounded-md text-xs border border-[#30363d] flex items-center gap-2"
                                    >
                                    <span>{achievement.icon}</span>
                                    <span>{achievement.text}</span>
                                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="max-w-7xl mx-auto px-8 py-20 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-[#8b949e] mb-8">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <a
                        href="mailto:tayonejohnmark1@gmail.com"
                        className="inline-block px-6 py-3 bg-[#238636] text-white rounded-md hover:bg-[#2ea043] transition-colors font-medium text-sm mb-8"
                    >
                        Send Email
                    </a>

                    <div className="flex justify-center gap-6">
                        {['🐙', '💼', '🐦', '📧'].map((icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="w-12 h-12 bg-[#21262d] border border-[#30363d] rounded-md flex items-center justify-center text-xl hover:bg-[#30363d] hover:border-[#58a6ff] transition-all"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#161b22] border-t border-[#21262d] py-8 text-center text-[#8b949e] text-sm">
                <p>&copy; 2025 John Mark Tayone. Built with passion and code.</p>
            </footer>
        </div>
    );
}