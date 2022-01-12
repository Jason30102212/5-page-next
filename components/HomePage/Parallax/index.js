import styles from './Parallax.module.scss'
import classNames from 'classnames'

import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'

const Parallax = () => {
  return (
    <Container
      className={styles.parallax_container}
      style={{
        backgroundImage: `url("https://via.placeholder.com/200x200")`
      }}
    >
      <Row>
        <Col
          sm='12'
          className={classNames(styles.parallax__column)}
        >
          <h1 className={classNames(styles.parallax__heading)}>PARALLAX COMPONENT</h1>
          <p className={classNames(styles.parallax__content)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
