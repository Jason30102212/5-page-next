import {
    Container
} from 'reactstrap'

import styles from './Contact.module.scss'


const Contact = () => {
    return (

        <Container
            className={styles.contact__container}
        >
            <h1 className={styles.contact__heading}>CONTACT</h1>            
           <p>Book Free Trial</p>
           <p>Have a Question?</p>
           <p>Come for a visit</p>
        </Container>
    )
}

export default Contact