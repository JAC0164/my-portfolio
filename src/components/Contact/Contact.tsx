import { Container } from './styles';
import emailIcon from '../../assets/email-icon.svg';
import phoneIcon from '../../assets/phone-icon.svg';
import { Form } from '../Form/Form';
import userInfos from '../../data/userInfos';

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href={`mailto:${userInfos.email}`}>
            <img src={emailIcon} alt="Email" />
          </a>
          <a href={`mailto:${userInfos.phone}`}>{userInfos.email}</a>
        </div>
        <div>
          <a href={`tel:${userInfos.phone}`}>
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href={`tel:${userInfos.phone}`}>
            ({userInfos.phone.slice(0, 4)}) {userInfos.phone.slice(4)}
          </a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
