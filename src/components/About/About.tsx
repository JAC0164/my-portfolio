import ScrollAnimation from 'react-animate-on-scroll';
import JacoColy from '../../assets/JacoColy.svg';
import angularIcon from '../../assets/angular.svg';
import cssIcon from '../../assets/css-icon.svg';
import gitIcon from '../../assets/git.svg';
import htmlIcon from '../../assets/html-icon.svg';
import javaIcon from '../../assets/java.svg';
import mysqlIcon from '../../assets/mysql-icon.svg';
import nodeIcon from '../../assets/node-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import mongobdIcon from '../../assets/mongodb.svg';
import typescriptIcon from '../../assets/typescript-icon.svg';
import { Container } from './styles';

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi! I'm a fullstack developer skilled in front-end (HTML, CSS, JavaScript) and back-end (PHP,
            Java, Node.js) technologies. I blend design and functionality to create immersive digital
            experiences.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: '2rem', marginBottom: '2rem' }}
        >
          <p>
            My aim? To bring digital visions to life. With React, Angular, Laravel, Spring Boot, and
            Node.js, I merge responsive front-ends with strong back-ends for seamless user journeys.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Tech evolves, and so do I. Learning's my constant. I'm excited to team up, turn ideas into
            code, and shape the web's future together.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={javaIcon} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={gitIcon} alt="git" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={angularIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={mongobdIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={mysqlIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={JacoColy} alt="Jaco Coly" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
