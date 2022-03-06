import {
  Container,
  Row,
  Col
} from 'reactstrap'
import classNames from 'classnames'
import styles from './Classes.module.scss'

import ClassSegment from './ClassSegment'

import training from "../../public/static/images/training.jpg"
import training2 from "../../public/static/images/training2.jpg"
import conditioning from "../../public/static/images/conditioning.jpg"
import competition from "../../public/static/images/competition.jpg"


const Classes = () => {
  return (
    <Container
      className={styles.classes__container}
    >
      <h1 className={styles.classes__heading}>CLASSES</h1>
      <ClassSegment
            styles={styles}
            image={training}
            title={"MMA"}
            reverse
            imageRight
      />
      <ClassSegment
            styles={styles}
            image={training2}
            title={"BRAZILIAN JIU JITSU"}
            reverse
      />
      <ClassSegment
            styles={styles}
            image={conditioning}
            title={"STRENGTH AND CONDITIONING"}
            reverse
            imageRight
      />
      <ClassSegment
            styles={styles}
            image={competition}
            title={"COMPETITION TRAINING"}
            reverse
      />
      
    </Container>
  )
}

export default Classes
