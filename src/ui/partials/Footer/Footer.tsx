import { Container } from "react-bootstrap";
import { FooterContainer } from "../../styles/Footer/Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <hr />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p>
            Todos Direitos Reservados a <a href="https://github.com/Jefflds/todo-list">Jefflds</a>, 2024.
          </p>
        </div>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
