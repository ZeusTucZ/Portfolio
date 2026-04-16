import Navbar from "../components/Navbar";
import { Link, Navigate, useParams } from "react-router";
import { projects } from "../data/projects";
import "../App.css";

const ProjectOverview = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="portfolio-shell">
      <Navbar />
      <main className="portfolio-main page-main project-overview-main">
        <section className="overview-hero">
          <div className="overview-hero-copy">
            <span className="section-kicker">Project Overview</span>
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            <div className="overview-actions">
              <Link className="primary-link" to="/projects">
                Back to archive
              </Link>
              <a
                className="overview-secondary-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View repository
              </a>
            </div>
          </div>

          <aside className="overview-summary-card">
            <span className="project-index">{project.year}</span>
            <h2>Quick Snapshot</h2>
            <div className="overview-meta-list">
              <div>
                <span>Role</span>
                <strong>{project.role}</strong>
              </div>
              <div>
                <span>Duration</span>
                <strong>{project.duration}</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>Product + Experience</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="overview-grid">
          <article className="overview-panel overview-story">
            <span className="section-kicker">Context</span>
            <h2>What this project is about</h2>
            <p>{project.summary}</p>
            <p>{project.outcome}</p>
          </article>

          <article className="overview-panel overview-stack">
            <span className="section-kicker">Stack</span>
            <h2>Tools and areas involved</h2>
            <div className="project-tags overview-tags">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="overview-detail-grid">
          <article className="overview-panel">
            <span className="section-kicker">Highlights</span>
            <h2>Key design decisions</h2>
            <div className="overview-highlight-list">
              {project.highlights.map((item, index) => (
                <div className="overview-highlight-item" key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="overview-panel overview-metrics-panel">
            <span className="section-kicker">Project Lens</span>
            <h2>Built to communicate more than code</h2>
            <div className="showcase-metrics overview-metrics">
              <div>
                <strong>01</strong>
                <span>Narrative-based presentation</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Clear role and scope framing</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Direct path to the repository</span>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default ProjectOverview;
