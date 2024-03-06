import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ezvizgal1 from '../assets/img/ezvizgal1.jpg';
import dahuagal1 from '../assets/img/dahuagal1.jpg';
import hilookgal1 from '../assets/img/hilookgal1.jpg';
import hikvisiongal1 from '../assets/img/hikvisiongal1.jpg';

export const Gallery = () => {
    
    const responsive = {
        superLargerDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1204, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0} ,
        items: 1
        }
};

    return (
        <section className="gallery" id="gallery">
            <Container>
                <Row>
                    <h1>GALLERY PHOTO PRODUCT</h1>
                    <Col xs={12} md={12} xl={12}>
                    <Carousel responsive={responsive} infinite={true} className="skills-slider">
                        <div className="foto">
                            <img src={ezvizgal1} />
                        </div>
                        <div className="foto">  
                            <img src={dahuagal1} />    
                        </div>
                        <div className="foto">
                            <img src={hilookgal1} />
                        </div>
                        <div className="foto">  
                            <img src={hikvisiongal1} />    
                        </div>
                    </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}