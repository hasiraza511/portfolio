
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { Code, GraduationCap, BookOpen, Coffee, User, Heart } from "lucide-react";
import InfoCard from "@/components/InfoCard";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    { name: "Python", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React.js", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
    { name: "R", level: "Intermediate" },
    { name: "Machine Learning", level: "Advance" },
    { name: "Power BI", level: "Advanced" },
    { name: "SQL", level: "Advanced" },
    { name: "AI", level: "Intermediate" },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Know Who I Am" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                I am a versatile tech professional—a Data Analyst who uncovers insights and a Full Stack Developer who builds solutions. With 2 years of experience, you bridge data and code to create impact, whether through dashboards, apps, or automation. Your hybrid skills make you a problem-solver in data-driven development.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(155, 135, 245, 0.15)" }}
            >
              <div className="glass-panel h-full p-8 rounded-lg">
                <div className="bg-gradient-to-br from-brand-purple/20 to-blue-500/20 w-full h-80 rounded-lg mb-8"></div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {["Python", "JavaScript", "C++", "React.js", "Node.js", "Next.js"].map((skill) => (
                    <motion.span 
                      key={skill}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "rgba(155, 135, 245, 0.3)",
                        color: "#ffffff" 
                      }}
                      className="inline-block py-1 px-4 rounded-full bg-brand-purple/10 text-brand-purple text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6">
                <AnimatedText text="Who am I?" once />
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm <motion.span 
                    className="text-brand-purple font-semibold"
                    whileHover={{ color: "#8B5CF6" }}
                  >Muhammad Haseeb Raza </motion.span>, Data Analyst and Full Stack Developer with 2 years of experience building data-driven solutions and scalable web applications.
                </p>
                <p>
                  My expertise includes Python (Pandas, NumPy), SQL, JavaScript (React, Node.js), and BI tools (Power BI, Tableau), along with backend frameworks like Django and Express.
                </p>
                <p>
                 I’ve worked on end-to-end projects—from analyzing datasets to deploying full-stack apps—combining analytics and development to deliver actionable insights and functional systems.
                </p>
                <p>
                 Passionate about problem-solving, I thrive where data meets code.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Professional Skills</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                These are the technologies and programming languages I've worked with and continue to develop expertise in.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.2)",
                    y: -5
                  }}
                  className="glass-panel p-6 rounded-lg text-center"
                >
                  <motion.h3 
                    className="font-semibold mb-2"
                    whileHover={{ color: "#9b87f5" }}
                  >{skill.name}</motion.h3>
                  <span className={`text-xs py-1 px-3 rounded-full ${
                    skill.level === 'Advanced' ? 'bg-brand-purple/20 text-brand-purple' :
                    skill.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">More About Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InfoCard icon={User} title="Personal Interests">
                <ul className="space-y-2 text-muted-foreground">
                  {["Exploring new technologies", "Solving algorithmic challenges", 
                    "Open-source contributions", "Web development projects"].map((interest, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#9b87f5" }}
                    >
                      <Heart className="h-4 w-4 text-brand-purple mr-2" />
                      {interest}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard icon={Code} title="Coding Philosophy">
                <ul className="space-y-2 text-muted-foreground">
                  {["Clean and maintainable code", "Focus on user experience", 
                    "Continuous learning and improvement", "Building with scalability in mind"].map((philosophy, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#9b87f5" }}
                    >
                      <Coffee className="h-4 w-4 text-brand-purple mr-2" />
                      {philosophy}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard icon={GraduationCap} title="Education Journey">
                <ul className="space-y-2 text-muted-foreground">
                  {["Computer Science fundamentals", "Data structures and algorithms", 
                    "Machine learning and AI", "Data Engineering"].map((journey, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#9b87f5" }}
                    >
                      <BookOpen className="h-4 w-4 text-brand-purple mr-2" />
                      {journey}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard icon={BookOpen} title="Future Goals">
                <ul className="space-y-2 text-muted-foreground">
                  {["Mastering advanced AI techniques", "Building impactful Softwares", 
                    "Become Data scientist", "Made my own Tech company"].map((goal, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center"
                      whileHover={{ x: 5, color: "#9b87f5" }}
                    >
                      <GraduationCap className="h-4 w-4 text-brand-purple mr-2" />
                      {goal}
                    </motion.li>
                  ))}
                </ul>
              </InfoCard>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
