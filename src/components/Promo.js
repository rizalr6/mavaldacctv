import { Container, Row, Col } from "react-bootstrap"
import ezviz from '../assets/img/ezviz.png';
// import ezviz from '../assets/img/ezvizjpg.jpg';

export const Promo = () => {
    return (
        <div className="promo">
        <Container>
            <Row>
                <Col xs={12} md={12} xl={12}>
                    <img className="ezviz" src={ezviz} />
                </Col>
            </Row>
        </Container>
        </div>
    )
}