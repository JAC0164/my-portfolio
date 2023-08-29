import { Container } from './styles';

import reactIcon from '../../assets/react-icon.svg';
import userInfos from '../../data/userInfos';

export function Footer() {
  return (
    <Container className="footer">
      <a href="#home" className="logo">
        {userInfos.name.split(' ').map((n) => (
          <span>{n}</span>
        ))}
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>

      <div className="social-media">
        {userInfos.social.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer">
            <img src={social.icon} alt={social.name} />
          </a>
        ))}
      </div>
    </Container>
  );
}
