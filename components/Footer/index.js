import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'
import classNames from 'classnames'

import map from "../../public/static/images/map.PNG"

import styles from './Footer.module.scss'

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
            <img className={styles.footerColumn__map} src={map.src}></img>
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
              <Link href="/classes">
                <a>CLASSES</a>
              </Link>
            </div>
            <div>
              <Link href="/timetable">
                <a>TIMETABLE</a>
              </Link>
            </div>
            <div>
              <Link href="/about">
                <a>ABOUT</a>
              </Link>
            </div>
            <div>
              <Link href="/contact">
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
