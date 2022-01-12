import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'
import classNames from 'classnames'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container
        className={classNames(styles.footerContainer)}
      >
        <Row>
          <Col
            className={classNames("bg-light", styles.footerColumn)}
            xs="12"
            md="4"
          >
            <h3 className={classNames(styles.test)}>GET IN TOUCH</h3>
            <p className="bg-l">1300 555 555</p>
            <p>contact@nextlevelmma.com</p>
            <p>facebook.com/nextlevelmma.com</p>
            <p>instagram.com/nextlevelmma</p>
          </Col>
          <Col
            className={classNames("bg-light", styles.footerColumn)}
            xs="12"
            md="4"
          >
            <h3>DROP IN AND SAY HI</h3>
            <p>Lot 10, Harvey Street, Adelaide</p>
            <img src="https://via.placeholder.com/350x150"></img>
          </Col>
          <Col
            className={classNames("bg-light", styles.footerColumn)}
            xs="12"
            md="4"
            >
            <h3>NAVIGATION</h3>
            <div>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a>CLASSES</a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a>TIMETABLE</a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a>ABOUT</a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a>CONTACT</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
