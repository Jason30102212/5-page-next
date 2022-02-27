import {
  Container,
  Row,
  Col
} from 'reactstrap'
import classNames from 'classnames'
import styles from './ImageGallery.module.scss'

import bags from '../../../public/static/images/bags.jpg'
import competition from '../../../public/static/images/competition.jpg'
import conditioning from '../../../public/static/images/conditioning.jpg'
import facility from '../../../public/static/images/facility.jpg'
import group from '../../../public/static/images/group.jpg'
import mats from '../../../public/static/images/mats.jpg'
import pads2 from '../../../public/static/images/pads_2.jpg'
import pads from '../../../public/static/images/pads.jpg'
import win from '../../../public/static/images/win.jpg'
import training from '../../../public/static/images/training.jpg'
import training2 from '../../../public/static/images/training2.jpg'
import training3 from '../../../public/static/images/training3.jpg'


const images = [
  {url: bags.src},
  {url: competition.src},
  {url: conditioning.src},
  {url: facility.src},
  {url: group.src},
  {url: mats.src},
  {url: pads2.src},
  {url: pads.src},
  {url: win.src},
  {url: training.src},
  {url: training2.src},
  {url: training3.src}
]

const ImageGallery = () => {

  const generateImages = () => {
    return images.map((image, key) => {
      return (
        <Col
          xs="6"
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
