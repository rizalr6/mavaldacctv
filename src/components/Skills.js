import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";
import { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import logomsg from '../assets/img/logob.png';

export const Skills = () => {

    const [counterOn, setCounterOn] = useState(false);

    const responsive = {
    superLargerDesktop: {
        // the naming can be any, depend on you bro.
        breakpoint: { max: 4000, min: 3000 },
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
    <section className="skills" id="skills">
        <Container>
            <Row>
                <Col xs={12} md={12} xl={12}>
                <div className="skills-bx">
                    <h1>
                        Soekarindo Group
                    </h1>
                    <p>
                    Kami menyediakan CCTV dengan<br></br>
                    kualitas terbaik dengan jaminan<br></br> 
                    harga termurah, fast respon dengan<br></br> 
                    teknisi berpengalaman berdiri sejak 
                    Tahun 2018
                    </p>
                    <Carousel responsive={responsive} infinite={true} className="skills-slider">
                        <div className="item">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h2>{counterOn && <CountUp start={0} end={2043} duration={4} delay={1}/>}</h2>
                            <h3>Happy Customers</h3>
                        </ScrollTrigger>
                        </div>
                        <div className="item">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>   
                        <h2>{counterOn && <CountUp start={0} end={3532} duration={4} delay={1}/>}</h2>
                            <h3>Projects</h3>
                        </ScrollTrigger>
                        </div>
                        <div className="item">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>  
                        <h2>{counterOn && <CountUp start={0} end={2018} duration={4} delay={1}/>}</h2>
                            <h3>Established Since</h3>
                        </ScrollTrigger>    
                        </div>
                        <div className="item">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <h2>{counterOn && <CountUp start={0} end={15} duration={4} delay={1}/>}</h2>
                            <h3>Hard Workers</h3>
                        </ScrollTrigger>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
)
}