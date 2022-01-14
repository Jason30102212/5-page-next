import { Container, Row, Col, Button } from 'reactstrap'
import styles from './Header.module.scss'
import logo from './Capture.PNG'

const Header = (props) => {
  return (
    <Container
      className={styles.header__container}
      style={{
        backgroundImage: `url(${logo.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
      }}
    >
      <Row>
        <Col
          className={styles.header__column}
          xs="12"
          md="12"
        >
          <h1 className={styles.header__welcome}>
            Welcome to Next Level MMA
          </h1>
          <h1 className={styles.header__main}>
            We offer classes for a variety of different martial arts disiplines
          </h1>
          <h1 className={styles.header__try}>
            Try any class for free
          </h1>
          <Button>Free Trial</Button>
          <h1 className={styles.header__address}>
            Address
          </h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
