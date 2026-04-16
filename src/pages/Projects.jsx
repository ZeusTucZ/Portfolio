import Navbar from "../components/Navbar";
import "../App.css";

const projects = [
  {
    title: "Elyos Racing Team",
    summary: "End-to-end web page for a telemetry system in a racing team",
    link: "https://your-project-link.com",
  },
  {
    title: "Nutrition App",
    summary:
      "Aquí puedes hablar de producto, arquitectura, diseño o negocio.",
    link: "https://your-project-link.com",
  },
  {
    title: "Smart Mirror",
    summary:
      "Buen espacio para demos visuales, dashboards o piezas interactivas.",
    link: "https://your-project-link.com",
  },
  {
    title: "Proyecto cuatro",
    summary:
      "También sirve para agrupar trabajos pequeños o experimentos creativos.",
    link: "https://your-project-link.com",
  },
];

const certificates = [
  {
    title: "Oracle Cloud Infrastructure (OCI) Foundations Associate",
    link: "https://drive.google.com/file/d/108MJNYTEdnUXAzgJKHvCWzTOx-4BJ33V/view",
  },
  {
    title: "Oracle Cloud Infrastructure (OCI) AI Foundations Associate",
    link: "https://drive.google.com/file/d/1NszRxV8fscqQDoagyQuRi-gxA6I3L1x_/view"
  },
  {
    title: "Smart Mirror (1st Place)",
    summary: "Summar of the smart mirror",
    link: "https://drive.google.com/file/d/1Uo6PxW_tF16aJmc5TvvSlPt9WQb-I_m7/view"
  },
  {
    title: "Master the Coding Interview: Data Structures + Algorithms",
    link: "https://www.udemy.com/certificate/UC-e7d39414-74b3-46c6-b8b1-64b29e95e29d/"
  },
  {
    title: "Machine Learning with Python",
    link: "https://www.coursera.org/account/accomplishments/verify/CTV61QX5EH4F"
  }
];

const Projects = () => {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main className="portfolio-main page-main">
        <section className="inner-hero">
          <span className="section-kicker">Project Archive</span>
        </section>

        <section className="project-grid">
          {projects.map((project, index) => (
            <a
              className="project-card"
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="project-index">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-tags">
                <span>Case Study</span>
                <span>UI</span>
                <span>Impacto</span>
              </div>
            </a>
          ))}
        </section>

        {/* Certificates section*/}
        <section className="inner-hero certificates">
          <span className="section-kicker">Certificates</span>
        </section>

        <section className="project-grid">
          {certificates.map((certificate, index) => (
            <a
              className="project-card"
              key={certificate.title}
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="project-index">0{index + 1}</span>
              <h3>{certificate.title}</h3>
              <p>{certificate.summary}</p>
              <div className="project-tags">
                <span>Certificate</span>
                <span>Institution</span>
                <span>Year</span>
              </div>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Projects;
