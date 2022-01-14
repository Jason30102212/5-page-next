import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'
import styles from './Parallax.module.scss'
import classNames from 'classnames'

import logo from '../../Header/Capture.PNG'

const Parallax = () => {
  return (
    <Container
      className={styles.parallax_container}
      style={{
        backgroundImage: `url(${logo.src})`
      }}
    >
      <Row>
        <Col
          sm='12'
          className={classNames(styles.parallax__column)}
        >
          <h1 className={classNames(styles.parallax__heading)}>OUR CULTURE</h1>
          <p className={classNames(styles.parallax__content)}>When you train at Infinite, you’ll be training a welcoming, supportive, family culture. Lead by our team of highly trained, professional coaches, our members will make you feel comfortable from the minute you step foot on the mat. </p>
          <Button
            className={classNames(styles.parallax__button)}
          >
            Button
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Parallax
