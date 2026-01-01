import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Ambulance, Video, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Emergency Medical Services (EMS)",
    description: "Real-time emergency medical platform enabling instant ambulance booking and blood donor matching during critical situations.",
    icon: Ambulance,
    period: "Nov 2024 – Jan 2025",
    technologies: ["Java", "Servlet", "JSP", "JDBC", "MySQL", "Apache Tomcat"],
    features: [
      "Real-time ambulance booking system",
      "Blood donor-recipient matching algorithm",
      "Driver and donor registration modules",
      "DAO architecture for scalable operations",
    ],
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "hover:border-red-500/50",
    githubUrl: "https://github.com/jegan-barranish",
    liveUrl: "#",
  },
  {
    title: "Telemedicine Web Application",
    description: "Full-featured telemedicine platform enabling real-time video consultation and chat between doctors and patients.",
    icon: Video,
    period: "2025",
    technologies: ["Java", "SQL", "HTML/CSS", "WebRTC"],
    features: [
      "Real-time video consultation",
      "Multi-doctor and hospital support",
      "Digital prescription generation",
      "Secure role-based access control",
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-blue-500/50",
    githubUrl: "https://github.com/jegan-barranish",
    liveUrl: "#",
  },
  {
    title: "Furnify - Full-Stack Furniture Store",
    description: "A modern, scalable full-stack web application for a furniture store with user authentication, dashboard, and task management capabilities.",
    icon: ShoppingCart,
    period: "2025",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Material-UI", "JWT", "bcrypt"],
    features: [
      "JWT-based user authentication (Sign Up, Login, Logout)",
      "Protected routes with React Router",
      "User dashboard with profile management",
      "Full CRUD task management system",
      "Search & filter functionality for tasks",
      "Admin panel to view all users",
      "RESTful API with Express.js",
      "MongoDB database integration",
    ],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "hover:border-purple-500/50",
    githubUrl: "https://github.com/JeganBarranish/PortFolio",
    liveUrl: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
        backgroundSize: "40px 40px"
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Featured Work</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            My <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`glass rounded-2xl overflow-hidden card-shadow ${project.borderColor} transition-all duration-300 group`}
            >
              {/* Project Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-8">
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <project.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold">{project.title}</h3>
                      <span className="text-sm text-muted-foreground">{project.period}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{project.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + featureIndex * 0.05 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="heroOutline" size="sm" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="hero" size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

