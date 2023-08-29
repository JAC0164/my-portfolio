import Particles from 'react-tsparticles';
import { particlesOptions } from '../../configs/particles';
import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { Hero } from '../Hero/Hero';
import { Project } from '../Project/Project';
import { Container } from './styles';

export function Main() {
  return (
    <Container>
      <Particles id="tsparticles" options={particlesOptions} />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}
