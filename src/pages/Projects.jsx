import Navbar from "../components/Navbar";
import { Link } from "react-router";
import { certificates, projects } from "../data/projects";
import "../App.css";

const getCenterIndex = (items) => Math.floor(items.length / 2);

const CertificatePreview = ({ certificate }) => (
  <div className="certificate-preview" aria-hidden="true">
    {certificate.image ? (
      <img src={certificate.image} alt="" />
    ) : (
      <div className="certificate-preview-paper">
        <div className="certificate-preview-seal">
          {certificate.number}
        </div>

        <span>{certificate.issuer}</span>
        <strong>{certificate.title}</strong>

        <div className="certificate-preview-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
    )}
  </div>
);


const Projects = () => {
  const featuredProjectIndex = getCenterIndex(projects);
  const featuredCertificateIndex = getCenterIndex(certificates);

  return (
    <div className="portfolio-shell">
      <Navbar />
      <main className="portfolio-main page-main">

        <section className="inner-hero">
          <span className="section-kicker">Project Archive</span>
        </section>

        <section className="horizontal-strip project-strip" aria-label="Project archive">
          {projects.map((project, index) => (
            <Link
              className={`project-card strip-card ${
                index === featuredProjectIndex ? "is-featured" : ""
              }`}
              key={project.title}
              to={`/projects/${project.slug}`}
            >
              <span className="project-index">{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-tags">
                <span>{project.role}</span>
                <span>{project.year}</span>
                <span>Case Study</span>
              </div>
            </Link>
          ))}
        </section>

        <section className="inner-hero certificates showcase-heading">
          <span className="section-kicker">Certificates</span>
        </section>

        <section className="certificate-marquee" aria-label="Certificates">
          <div className="certificate-marquee-track">
            {[...certificates, ...certificates].map((certificate, index) => (
              <a
                className={`certificate-overview-card ${
                  certificate.number === certificates[featuredCertificateIndex].number
                    ? "is-featured"
                    : ""
                }`}
                key={`${certificate.title}-${index}`}
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="certificate-card-header">
                  <span className="project-index">{certificate.number}</span>
                  <div>
                    <span>{certificate.issuer}</span>
                    <strong>{certificate.year}</strong>
                  </div>
                </div>

                <CertificatePreview certificate={certificate} />

                <div className="certificate-overview-copy">
                  <span className="section-kicker">{certificate.category}</span>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.summary}</p>

                  <div className="certificate-overview-footer">
                    <span>Credential overview</span>
                    <strong>Open</strong>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
