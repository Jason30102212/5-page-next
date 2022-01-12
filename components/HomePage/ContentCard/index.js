import {
  Container,
  Row,
  Col,
  Card
} from 'reactstrap'
import classNames from 'classnames'
import styles from './ContentCard.module.scss'


const ContentCard = ({img, title, content}) => {
  return (
    <Container
      className={classNames(styles.content_card__container)}
    >
      <Card className={classNames(styles.content_card__card)}>
        <Container>
          <Row>
            <Col>
              <img className={classNames(styles.content_card__image)}src="https://via.placeholder.com/300.png/09f/fff"/>
              <h1 className={classNames(styles.content_card__title)}>TEST TITLE</h1>
              <br />
              <p className={classNames(styles.content_card__description)}>This is content for the ContentCard component</p>
            </Col>
          </Row>
        </Container>
      </Card>
    </Container>
  )
}

export default ContentCard
