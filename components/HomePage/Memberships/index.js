import styles from './Memberships.module.scss'
import classNames from 'classnames'

import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'

const Memberships = () => {
  return (
    <Container
      className={classNames(styles.memberships__container)}
    >
      <Row
        className={classNames(styles.memberships__heading__row)}
      >
        <Col
          className={classNames(styles.memberships__heading__column)}
        >
          <h1 className={classNames(styles.memberships__heading)}>Heading</h1>
        </Col>
      </Row>
      <Row
        className={classNames(styles.memberships__description__row)}
      >
        <Col>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
      </Row>
      <Row
        className={styles.memberships__fragments__row}
      >
        <Col
          md="6"
          className={styles.memberships__fragments__column}
        >
          <h1 className={styles.memberships__fragments__heading}>ADULT<br /> MEMBERSHIP</h1>
          <p className={styles.memberships__fragments__price}>From $40 per week*</p>
          <Button className={styles.memberships__fragments__price}>JOIN NOW</Button>
        </Col>
        <Col
          md="6"
        >
          <h1 className={styles.memberships__fragments__heading}>KIDS<br /> MEMBERSHIP</h1>
          <p className={styles.memberships__fragments__price}>From $25 per week*</p>
          <Button className={styles.memberships__fragments__price}>JOIN NOW</Button>
        </Col>
      </Row>
      <Row>
        <Col
          md="12"
          className={classNames(styles.memberships__disclaimer__column)}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Memberships
