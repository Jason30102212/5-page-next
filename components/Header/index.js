import { Container, Row, Col } from 'reactstrap'
import styles from './Header.module.scss'

const Header = (props) => {
  return (
    <Container
      className={styles.headerContainer}
      style={{
        backgroundImage: `url("https://via.placeholder.com/200x200")`
      }}
    >
      <Row>
        <Col
          className=""
          xs="12"
          md="12"
        >
          {props.title}
        </Col>
      </Row>
    </Container>
  )
}

export default Header
