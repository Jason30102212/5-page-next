import {
    Container
} from 'reactstrap'

import styles from './About.module.scss'


const About = () => {
    return (

        <Container
            className={styles.about__container}
        >
            <h1 className={styles.about__heading}>ABOUT</h1>            
           <p>Our Classes</p>
           <p>Our Facilities</p>
           <p>Our Trainers</p>
        </Container>
    )
}

export default About