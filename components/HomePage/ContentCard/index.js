import {
  Container,
  Row,
  Col,
  Card
} from 'reactstrap'
import classNames from 'classnames'
import styles from './ContentCard.module.scss'


const ContentCard = ({image, title, content}) => {
  return (
    <Container
      className={classNames(styles.content_card__container)}
    >
      <Card className={classNames(styles.content_card__card)}>
        <Container>
          <Row>
            <Col>
              <img className={classNames(styles.content_card__image)}src={image}/>
              <h1 className={classNames(styles.content_card__title)}>{title}</h1>
              <br />
              <p className={classNames(styles.content_card__description)}>{content}</p>
            </Col>
          </Row>
        </Container>
      </Card>
    </Container>
  )
}

export default ContentCard
