import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FaJava, FaCuttlefish, FaHtml5, FaCss3Alt, FaDatabase
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiApache } from "react-icons/si";
import { Database, FileCode, Server, Cpu, FileText, Languages } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FileCode,
    skills: [
      { name: "Java", icon: FaJava, level: 90 },
      { name: "C++", icon: FaCuttlefish, level: 85 },
      { name: "C", icon: FaCuttlefish, level: 80 },
      { name: "HTML5", icon: FaHtml5, level: 85 },
      { name: "CSS3", icon: FaCss3Alt, level: 80 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL/SQL", icon: SiMysql, level: 85 },
      { name: "NoSQL", icon: SiMongodb, level: 75 },
    ],
  },
  {
    title: "Technologies & Tools",
    icon: Server,
    skills: [
      { name: "Apache Tomcat", icon: SiApache, level: 80 },
      { name: "JSP/Servlet", icon: FileCode, level: 85 },
      { name: "JDBC", icon: FaDatabase, level: 85 },
    ],
  },
  {
    title: "Core Competencies",
    icon: Cpu,
    skills: [
      { name: "Data Structures & Algorithms", icon: Cpu, level: 85 },
      { name: "Object-Oriented Programming", icon: FileCode, level: 90 },
      { name: "DBMS", icon: Database, level: 85 },
      { name: "Operating Systems", icon: Server, level: 80 },
    ],
  },
];

const softSkills = [
  { name: "Technical Documentation", icon: FileText },
  { name: "MS Office Suite", icon: FileText },
  { name: "English (Fluent)", icon: Languages },
  { name: "Tamil (Native)", icon: Languages },
  { name: "Kannada (Conversational)", icon: Languages },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
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
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Technical Expertise</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 card-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-primary)" }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass rounded-2xl p-6 card-shadow"
        >
          <h3 className="text-lg font-display font-semibold mb-6 text-center">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
              >
                <skill.icon className="w-4 h-4 text-primary" />
                <span className="text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
