import ContentCard from '../ContentCard'
import Parallax from '../Parallax'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import classNames from 'classnames'
import styles from './Contents.module.scss'

const Contents = () => {
  return (
    <Container
      className={classNames(styles.content__container)}
    >
      <Row
        className={classNames(styles.content__row)}
      >
        <Col
          className={classNames(styles.content_heading__column)}
          md="12"
        >
          <h1>Main Title</h1>
        </Col>
      </Row>
      <Row
        className={classNames(styles.content__row)}
      >
        <Col
          sm="12"
          md="6"
          lg="3"
        >
          <ContentCard/>
        </Col>
        <Col
          sm="12"
          md="6"
          lg="3"
        >
          <ContentCard/>
        </Col>
        <Col
          sm="12"
          md="6"
          lg="3"
        >
          <ContentCard/>
        </Col>
        <Col
          sm="12"
          md="6"
          lg="3"
        >
          <ContentCard/>
        </Col>
      </Row>
    </Container>
  )
}

export default Contents
