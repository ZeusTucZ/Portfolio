import Navbar from "../components/Navbar";
import { Link } from "react-router";
import { certificates, projects } from "../data/projects";
import "../App.css";

const Projects = () => {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main className="portfolio-main page-main">

        {/* Projects section */}
        <section className="inner-hero">
          <span className="section-kicker">Project Archive</span>
        </section>

        <section className="project-grid">
          {projects.map((project, index) => (
            <Link
              className="project-card"
              key={project.title}
              to={`/projects/${project.slug}`}
            >
              <span className="project-index">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-tags">
                <span>Case Study</span>
                <span>UI</span>
                <span>Impacto</span>
              </div>
            </Link>
          ))}
        </section>

        {/* Certificates section */}
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
