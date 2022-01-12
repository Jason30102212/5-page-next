import {
  Container,
  Row,
  Col
} from 'reactstrap'
import classNames from 'classnames'
import styles from './ImageGallery.module.scss'

const images = [
  {url: "https://via.placeholder.com/300.png/09f/fff"},
  {url: "https://via.placeholder.com/300.png/09f/fff"},
  {url: "https://via.placeholder.com/300.png/09f/fff"},
  {url: "https://via.placeholder.com/300.png/09f/fff"},
  {url: "https://via.placeholder.com/300.png/09f/fff"},
  {url: "https://via.placeholder.com/300.png/09f/fff"},
  {url: "https://via.placeholder.com/300.png/09f/fff"},
  {url: "https://via.placeholder.com/300.png/09f/fff"},
  {url: "https://via.placeholder.com/300.png/09f/fff"},
  {url: "https://via.placeholder.com/300.png/09f/fff"},
  {url: "https://via.placeholder.com/300.png/09f/fff"},
  {url: "https://via.placeholder.com/300.png/09f/fff"}
]

const ImageGallery = () => {

  const generateImages = () => {
    return images.map((image, key) => {
      return (
        <Col
          sm="6"
          md="3"
          lg="2"
          className={styles.imageGallery__image__column}
          key={key}
        >
          <img className={styles.imageGallery__image} src={image.url} />
        </Col>
      )
    })
  }

  return (
    <Container
      className={styles.imageGallery__container}
    >
      <Row>
        <Col
          sm="12"
          className={styles.imageGallery__title__column}
        >
          <h1 className={styles.imageGallery__title}>STAY UPDATED</h1>
        </Col>
      </Row>
      <Row>
        {generateImages()}
      </Row>
    </Container>
  )
}

export default ImageGallery
