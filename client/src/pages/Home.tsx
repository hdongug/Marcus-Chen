import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Tech Minimalism + Neon Accent
 * - Dark background (#0a0a0a) with neon green (#00ff41) accents
 * - Space Mono for headers, Inter for body, JetBrains Mono for code
 * - Asymmetric layout with floating elements
 * - Subtle hover effects and fade-in animations
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Real-time Chat App",
      description: "WebSocket-based chat application with user authentication",
      tags: ["React", "Socket.io", "Express", "PostgreSQL"],
      link: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "AI Content Generator",
      description: "Machine learning-powered content generation tool",
      tags: ["Python", "FastAPI", "React", "OpenAI"],
      link: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for real-time data analytics",
      tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
      link: "https://github.com",
      demo: "https://example.com",
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "FastAPI"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"] },
    { category: "DevOps", items: ["Docker", "AWS", "GitHub Actions", "Vercel"] },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold neon-glow">MC</div>
          <div className="flex gap-6">
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#blog" className="hover:text-accent transition-colors">Blog</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(/images/hero-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container py-32 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 fade-in-up">
            <h1 className="text-6xl font-bold mb-4">Marcus Chen</h1>
            <p className="text-xl text-muted-foreground mb-2">Full Stack Developer</p>
            <p className="text-lg text-foreground mb-8 max-w-lg">
              Building scalable web applications with modern technologies. Passionate about clean code, open source, and solving complex problems.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="tech-badge">React</div>
              <div className="tech-badge">Node.js</div>
              <div className="tech-badge">TypeScript</div>
              <div className="tech-badge">PostgreSQL</div>
              <div className="tech-badge">AWS</div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                View My Work
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com"
                className="p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Github size={20} className="text-accent" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Linkedin size={20} className="text-accent" />
              </a>
              <a
                href="mailto:marcus@example.com"
                className="p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Mail size={20} className="text-accent" />
              </a>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="flex-1 flex justify-center">
            <div className="w-80 h-80 rounded-lg border-2 border-accent/30 bg-card/50 flex items-center justify-center neon-border-left">
              <Code2 size={120} className="text-accent/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/30 border-t border-border">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-accent rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="card-hover bg-background border border-border rounded-lg p-6 overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tech-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <Github size={16} /> Repository
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-16 h-1 bg-accent rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="neon-border-left">
                <h3 className="text-lg font-bold mb-4 text-accent flex items-center gap-2">
                  {idx === 0 && <Code2 size={20} />}
                  {idx === 1 && <Zap size={20} />}
                  {idx === 2 && <Database size={20} />}
                  {idx === 3 && <Code2 size={20} />}
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIdx) => (
                    <li key={skillIdx} className="text-foreground/80 hover:text-accent transition-colors">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-card/30 border-t border-border">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
            <div className="w-16 h-1 bg-accent rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, idx) => (
              <article key={idx} className="card-hover bg-background border border-border rounded-lg p-6 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="text-sm text-muted-foreground mb-2">Jan {15 + idx}, 2024</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Building Scalable Web Applications
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learn best practices for architecting and scaling modern web applications with React and Node.js.
                </p>
                <a href="#" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
                  Read More <ExternalLink size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container max-w-2xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-16 h-1 bg-accent rounded-full" />
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-card border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card/50">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground">© 2024 Marcus Chen. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
