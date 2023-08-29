import ScrollAnimation from 'react-animate-on-scroll';
import externalLink from '../../assets/external-link.svg';
import folderIcon from '../../assets/folder.svg';
import { Container } from './styles';
import { projects } from '../../data/projects';

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, i) => (
          <ScrollAnimation key={project.name + i} animateIn="flipInX">
            <div className="project">
              <header>
                <img src={folderIcon} alt="folder" />
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.techs.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
