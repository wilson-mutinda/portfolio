import { useEffect, useState } from "react";

function Dashboard() {

    // sections
    const sections = [
        { id: 'home', label: "Home" },
        { id: 'about', label: "About" },
        { id: 'skills', label: "Skills" },
        { id: 'projects', label: "Projects" },
        { id: 'education', label: "Education" },
        { id: 'contact', label: "Contact" },
    ];

    const titles = [
        { image: '/creative.png', name: "Creative Problem-Solver" },
        { image: '/backend.png', name: "Backend and API Expert" },
        { image: '/frontend.png', name: "Frontend Specialist" },
        { image: '/database.png', name: "Database Management" },
    ];

    // projects
    const projects = [
        { title: "Course Reg", desc: "Full-stack student course registration app." },
        { title: "E-Commerce with M-PESA", desc: "Rails + Vue.js store with mobile payments" },
        { title: "Online Mobile Clinic", desc: "Django REST API for telemedicine" },
    ]

    // showMenu
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // scroll to section on click
    const handleScroll = (id) => { 
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
            setMenuOpen(false);
        }
    }

    // detect active section on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
                <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between">
                    <h1 className="text-2xl font-bold text-indigo-600">My Portfolio</h1>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-6 font-medium text-gray-600">
                        {sections.map((section) => (
                            <li key={section.id} onClick={() => handleScroll(section.id)} className={`cursor-pointer px-3 py-1 rounded-md transition ${activeSection === section.id ? "bg-blue-500" : "hover:text-indigo-600"}`}>
                                {section.label}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        <img src="/menu.svg" alt="menu" width={40} />
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-white shadow px-4 py-3 space-y-2">
                        {sections.map((section) => (
                            <p key={section.id} onClick={() => handleScroll(section.id)} className={`cursor-pointer px-3 py-1 rounded-md transition ${activeSection === section.id ? "bg-blue-500 text-white" : "hover:text-indigo-600"}`}>
                                {section.label}
                            </p>
                        ))}
                    </div>
                )}
            </nav>
            
            <div className="pt-20 px-4 max-w-6xl mx-auto space-y-8">
                {/* Hero Section */}
                <section id="home" className="flex flex-col md:flex-row items-center gap-8 min-h-screen pt-20">
                    <img src="/user.png" alt="profile" className="w-40 h-40 rounded-full border-4 border-indigo-600" />
                    <div>
                        <h4 className="text-2xl font-bold">Wilson Mutinda</h4>
                        <p className="text-gray-500 mb-4">Full-Stack Developer | Django | Rails | API Specialist | Problem Solver</p>
                        <div className="flex gap-4">
                            <button onClick={() => handleScroll('projects')} className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-700">View My Work</button>
                            <button onClick={() => handleScroll('contact')} className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">Contact Me</button>
                        </div>
                    </div>
                </section>

                {/* About section */}
                <section id="about" className="py-16">
                    <h5 className="text-xl font-semibold mb-2 text-center">About Me</h5>
                    <p className="text-gray-600 mb-6">
                        I'm a software developer with a strong background in database systems, backend and <br /> frontend development. Skilled in Django, Python,
                         Ruby on Rails, Vue.js, React.js and API integration. I create <br /> efficient, user-frindly solutions that address real-world challenges.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {titles.map((title) => (
                            <div className="mt-4" key={title.id}>
                                <img src={title.image} alt="images" width={60} className="" />
                                <p>{title.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-16">
                    <h5 className="text-xl font-semibold mb-4 text-center">Skills</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white shadow p-4 rounded-lg">
                            <p className="font-medium mb-2">Technical Skills</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Django</li>
                                <li>Python</li>
                                <li>React</li>
                                <li>Vue</li>
                                <li>REST APIs</li>
                                <li>PostgreSQL / MySQL</li>
                                <li>HTML, CSS, Javascript</li>
                            </ul>
                        </div>
                        <div className="bg-white shadow p-4 rounded-lg">
                            <p className="font-medium mb-2">Soft Skills</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                                <li>Communication</li>
                                <li>Time and Resource Management</li>
                                <li>Team Collaboration</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Projects section */}
                <section id="projects" className="py-16">
                    <h5 className="text-xl font-semibold mb-4 text-center">Projects</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div className="bg-white shadow p-4 rounded-lg hover:shadow-lg transition" key={project.id}>
                                <h6 className="font-semibold">{project.title}</h6>
                                <p className="text-sm text-gray-500">{project.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="py-16">
                    <h5 className="text-xl font-semibold mb-4 text-center">Education</h5>
                    <div className="bg-white shadow p-4 rounded-lg">
                        <p className="font-medium">BSc in Information Technology</p>
                        <p className="text-sm text-gray-500">Meru University of Science and Technology</p>
                        <p className="font-semibold mt-3">ALX Software Engineering Program</p>
                        <p className="text-sm text-gray-500">Specialization in backend and API development</p>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-16">
                    <h5 className="text-xl font-semibold mb-4 text-center">Get In Touch</h5>
                    <div className="flex justify-between flex-col md:flex-row gap-4">
                        <div className="bg-white shadow p-6 rounded-lg flex-1">
                            <p className="flex gap-2 mb-2 items-center">
                                <img src="/phone.svg" alt="phone" width={30} />
                                <span>0791738418</span></p>
                            <p className="flex gap-2 mb-2 items-center">
                                <img src="/email.svg" alt="email" width={30} />
                                <span><a href="mailto:mutidawilz@gmail.com" className="text-indigo-600 hover:underline">mutidawilz@gmail.com</a></span></p>
                            <p className="flex gap-2 mb-2 items-center">
                                <img src="/github.png" alt="github" width={30} />
                                <span><a href="https://github.com/wilson-mutinda" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">https://github.com/wilson-mutinda</a></span></p>
                            <p className="flex gap-2 mb-2 items-center">
                                <img src="/linkedin.png" alt="linkedin" width={30} />
                                <span><a href="https://linkedin.com/in/wilson-kilonzo-mutinda" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">https://linkedin.com/in/wilson-kilonzo-mutinda</a></span></p>
                        </div>

                        {/* contact form */}
                        <div className="rounded-md bg-white p-6 flex-1 shadow">
                            <form action="space-y-4">
                                <p className="font-medium text-lg text-center mb-4">Send a Message</p>

                                <div className="">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" name="name" id="name" className="mt-1 ring-1 ring-gray-500 mb-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
                                </div>

                                <div className="">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" name="email" id="email" className="mt-1 ring-1 ring-gray-500 mb-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200" />
                                </div>

                                <div className="">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea name="message" id="message" rows={4} className="mt-1 ring-1 ring-gray-500 mb-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200" placeholder="Write your message here..."></textarea>
                                </div>

                                {/* button */}
                                <button type="submit" className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
                {/* Copyright Section */}
                <footer className="bg-gray-900 text-white py-4 mt-8 text-center text-sm">
                    © {new Date().getFullYear()} Wilson Mutinda. All rights reserved.
                </footer>
            </div>
        </div>
    )
}

export default Dashboard
