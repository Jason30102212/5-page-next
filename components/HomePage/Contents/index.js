import ContentCard from '../ContentCard'
import Parallax from '../Parallax'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import classNames from 'classnames'
import styles from './Contents.module.scss'

import logo from '../../Header/Capture.PNG'


const Contents = () => {
  return (
    <Container
      className={classNames(styles.content__container)}
    >
      <Row
        className={classNames(styles.content__row)}
      >
        <Col
          className={classNames(styles.content__heading__column)}
          md="12"
        >
          <h1>From complete beginner to expert fighter</h1>
          <h2>We have a class for you</h2>
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
          <ContentCard
            image={logo.src}
            title="Disciplines and Styles"
            content="Reach your strength and conditioning goals with Infinite MMA's in house strength coach. Get a personalised program and semi-private weight lifting sessions up to 4 times per week. When designing your programs we take into account your goals, lifting experience, injuries and limitations and your MMA training schedule to deliver maximum results."
          />
        </Col>
        <Col
          sm="12"
          md="6"
          lg="3"
        >
          <ContentCard
            image={logo.src}
            title="Gym and Facilities"
            content="Infinite MMA is Ballarat's Premiere martial arts training facility. We have the best of the best in equipment, a full size MMA cage, over 200m2 of training mats, heavy bags, dummies, Ballarat's only dry sauna.... the list goes on! Come in and check it out."
          />
        </Col>
        <Col
          sm="12"
          md="6"
          lg="3"
        >
          <ContentCard
            image={logo.src}
            title="Strength and Conditioning"
            content="Reach your strength and conditioning goals with Infinite MMA's in house strength coach. Get a personalised program and semi-private weight lifting sessions up to 4 times per week. When designing your programs we take into account your goals, lifting experience, injuries and limitations and your MMA training schedule to deliver maximum results."
          />
        </Col>
        <Col
          sm="12"
          md="6"
          lg="3"
        >
          <ContentCard
            image={logo.src}
            title="Competition Preparation"
            content="Some people compete for glory or recognition. Other people compete as a way to focus on improvement. Perhaps you compete to meet new people or to see other approaches to your martial art. Whatever your reason for competing, the best way to get there is through dedicated competition training."
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Contents
