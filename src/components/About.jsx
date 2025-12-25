import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Code, Award } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "2+", label: "Years Experience" },
  { icon: Code, value: "500+", label: "3D Models Designed" },
  { icon: GraduationCap, value: "150+", label: "DSA Problems Solved" },
  { icon: Award, value: "6", label: "Best Employee Awards" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Engineer Turned <span className="text-gradient">Developer</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 card-shadow">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate developer with a unique background in mechanical design engineering. 
                After 2 years at Quest Global designing 500+ 3D models and working on complex RBI projects, 
                I transitioned to software development, pursuing B.Tech in Information Technology at Anna University.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My experience bridges the gap between engineering precision and software innovation. 
                I specialize in Java development, building full-stack applications that solve real-world problems 
                like emergency medical services and telemedicine platforms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm driven by the challenge of creating efficient, scalable solutions. 
                Whether it's optimizing database operations or designing intuitive user interfaces, 
                I bring the same attention to detail that made me a 6-time Best Employee award winner.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass rounded-2xl p-6 text-center card-shadow hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-display font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

