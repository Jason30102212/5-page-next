import { Container, Row, Col, Button } from 'reactstrap'
import styles from './Header.module.scss'
import logo from './Capture.PNG'
import classNames from 'classnames'

const Header = (props) => {
  return (
    <Container
      className={styles.header__container}
    >
      <Row>
        <Col
          className={styles.header__column}
          xs="12"
          md="12"
        >
          <h2 className={styles.header__main}>
            We offer classes for a variety of different martial arts disciplines
          </h2>
          <div className={styles.header__welcome__div}>
            Welcome to
          </div>
          <h1 className={styles.header__welcome__h1}>
            Next Level MMA
          </h1>
          <div className={classNames("card", styles.header__try)}>
            <h3 className={styles.header__try__heading}>
              Try any class for free
            </h3>
            <Button className={styles.header__try__button} href="/contact">Free Trial</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
