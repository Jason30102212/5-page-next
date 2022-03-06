import {
  Container,
  Row,
  Col,
  Card
} from 'reactstrap'
import classNames from 'classnames'
import styles from './Timetable.module.scss'

const Timetable = () => {

  return (
    <Container
      className={classNames(styles.timetable__container)}
    >
      <h1 className={styles.timetable__heading}>TIMETABLE</h1>
      <Row className={styles.timetable__title__row}>
        <Col>
        </Col>
      </Row>
      <Row className={styles.timetable__days}>
        <Col
          sm='0.5'
          md='0.5'
        >
          <h3>TIME</h3>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </Col>
        <Col
          sm='0.5'
          md="0.5"
        >
          <h3>AREA</h3>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </Col>
        <Col
        sm='0.5'
        md="1"
        >
          <h3>MON</h3>
        </Col>
        <Col
        sm='1'
        md="1"
        >
          <h3>TUES</h3>
        </Col>
        <Col
        sm='1'
        md="1"
        >
          <h3>WED</h3>
        </Col>
        <Col
        sm='1'
        md="1"
        >
          <h3>THURS</h3>
        </Col>
        <Col
        sm='1'
        md="1"
        >
          <h3>FRI</h3>
        </Col>
        <Col
        sm='1'
        md="1"
        >
          <h3>SAT</h3>
        </Col>
      </Row>
      <Row className={styles.timetable__time__one}>
      </Row>
      <Row className={styles.timetable__time__two}>
      </Row>
      <Row className={styles.timetable__time__three}>
      </Row>
      <Row className={styles.timetable__time__four}>
      </Row>
    </Container>
  )
}

export default Timetable
