import './Home.css';
import img1 from "../assets/rtocert.png.png"
import img2 from "../assets/img1.png"
import img3 from "../assets/img2.png"
import img4 from "../assets/photo_6291612354445686621_y.png"
import img5 from "../assets/IMG_7826.png"
import img6 from "../assets/logithon_certificate.png"
import img7 from "../assets/myimg.png"


const Home = () => {
  const skills = ['Java', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Machine Learning', 'Deep Learning'];
  
  const highlights = [
    { id: 1, image: img1, title: "Certificate" },
    { id: 2, image: img2, title: "RTO Maharashtra" },
    { id: 3, image: img3, title: "RTO Team" },
    { id: 4, image: img4, title: "GNIT Hackathon" },
    { id: 5, image: img5, title: "Hackathon Certificate" },
    { id: 6, image: img6, title: "Logithon- Softlink Global" }
  ];
 
  const projects = [
    {
      title: "Smart PDF to Data Converter using Generative AI",
      description: "Built a solution for converting PDF files into structured data formats, such as JSON, using advanced AI techniques",
      tech: [ "LangChain", "Gemini Pro", "Streamlit", "Pandas AI", "GROQ"]
    },
    {
      title: "“SkullRuksha”-Helmet Detection Based Vehicle with SMS Alert and Fall Detection",
      description: "Developed a System that prevents the motorcycle from an Accident, if no helmet is detected, then the rider can't exceed the speed 40 kmph, or else the rider can speed up to 150 kmph.",
      tech: ["Deep Learning", "Raspberry Pi", "Roboflow", "Python", "Motor Driver", "GSM","GPS", "Twillo"]
      
    },
    {
      title: "RTO Appointment Software with Special Recognition and Priority System for Esteemed Citizens- Govt. of Maharashtra",
      description: "Develop an innovative system for RTO offices to recognize and honor special groups such as military personnel, jawans, and veterans upon arrival. Automatically identify these individuals and warmly welcome them through personalized messages or announcements upon entry.",
      tech: ["React JS", "Vite", "MONGODB", "Flask", "Hashing", "YOLOV8","OpenCV","OCR", "Twillo"]
    }
  ];

  const experiences = [
    {
      role: "Business Intelligence Analyst",
      company: "TE Connectivity - Pune",
      duration: "Aug 2024 - Present",
      description: "Working on Business Improvements and full-stack development using modern technologies and Learning Operations."
    },
    {
      role: "Freelancer",
      company: "Datacurve.ai",
      duration: "Aug 2024 - Nov 2024",
      description: "worked on Bug Solving and Web development"
    }
  ];

  return (
    <div className="home-container">
      <div className="home-content">
        {/* Original home section */}
        <div className="home-grid">
          <div className="info-section fade-in">
            <div className="info-content">
              <h1 className="main-title slide-from-left">Hi, I am Prem Shejole</h1>
              <p className="delay-200 sub-title slide-from-left">Software Developer</p>
              <p className="delay-300 description slide-from-left">
                A passionate developer specializing in full-stack development, machine learning, and AI applications.
                Currently pursuing B.Tech at Vishwakarma Institute of Technology, Pune.
              </p>
            </div>

            <div className="skills-section slide-from-left delay-400">
              <h2 className="skills-title">Technical Expertise</h2>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="delay-300 photo-section fade-in">
            <div className="photo-container">
              <img
                src={img7}
                alt="Prem Shejole"
                className="profile-photo float"
              />
              <div className="photo-overlay"></div>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <section className="section fade-in">
          <h2 className="section-title slide-from-left">Highlights</h2>
          <div className="highlights-grid">
            {highlights.map((highlight) => (
              <div key={highlight.id} className="highlight-card fade-in">
                <img 
                  src={highlight.image} 
                  alt={highlight.title} 
                  className="highlight-image"
                />
                <p className="highlight-title">{highlight.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="section fade-in">
          <h2 className="section-title slide-from-left">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card fade-in">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="section fade-in">
          <h2 className="section-title slide-from-left">Experience</h2>
          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card fade-in">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-duration">{exp.duration}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;