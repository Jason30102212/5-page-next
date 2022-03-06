import {
    Row,
    Col
} from 'reactstrap'
import classNames from 'classnames'

const ClassSegment = ({styles, image, reverse, imageRight, title}) => {

    return (
        <div>
        {
            imageRight
            ?
            (<Row
                className={classNames("flex-md-row", styles.classes__row, reverse ? 'flex-column-reverse': '')}
            >
                <Col
                    md='6'
                    className={styles.classes__text__column}
                >
                    <div className={styles.classes__text__heading__div}>
                        <h1
                        className={styles.classes__text__heading}
                        >{title}</h1>
                    </div>
                <p className={styles.classes__text__paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col
                md='6'
                className={styles.classes__image__row}
                >
                    <img
                        className={styles.classes__image}
                        src={image.src}
                    />
                </Col>
             </Row>
          )
          :
          (
            <Row
            className={classNames(styles.classes__row)}
            >
                <Col
                md='6'
                className={styles.classes__image__row}
                >
                <img
                    className={styles.classes__image}
                    src={image.src}
                />
                </Col>
                <Col
                md='6'
                className={styles.classes__text__column}
                >
                <div className={styles.classes__text__heading__div}>
                    <h1
                    className={styles.classes__text__heading}
                    >{title}</h1>
                </div>
                <p className={styles.classes__text__paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
            </Row>
          )
        }
        </div>
    )
}

export default ClassSegment