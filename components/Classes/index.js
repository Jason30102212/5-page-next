import {
  Container,
  Row,
  Col,
  Card
} from 'reactstrap'
import classNames from 'classnames'
import styles from './Classes.module.scss'

const Classes = () => {
  return (
    <Container
      className={styles.classes_container}
    >
      <Row
        className={classNames("flex-column-reverse flex-md-row", styles.classes__row)}
      >
        <Col
          md='8'
          className={styles.classes__text__column}
        >
          <div className={styles.classes__text__heading__div}>
            <h1
              className={styles.classes__text__heading}
            >TITLE</h1>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
        <Col
          md='4'
          className={styles.classes__image__row}
        >
          <img
            className={styles.classes__image}
            src="https://via.placeholder.com/300.png/09f/fff"
          />
        </Col>
      </Row>
      <Row
        className={classNames(styles.classes__row)}
      >
        <Col
          md='4'
          className={styles.classes__image__row}
        >
          <img
            className={styles.classes__image}
            src="https://via.placeholder.com/300.png/09f/fff"
          />
        </Col>
        <Col
          md='8'
          className={styles.classes__text__column}
        >
          <div className={styles.classes__text__heading__div}>
            <h1
              className={styles.classes__text__heading}
            >TITLE</h1>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Classes
