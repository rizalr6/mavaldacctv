import { useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/headerimgfix.png";
import TrackVisibility from "react-on-screen";
import { FaHome } from "react-icons/fa";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "RUMAH", "SEKOLAH", "PABRIK", "GUDANG", "TOKO", "PERUMAHAN" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) => 
                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                    <span className="tagline">LAYANAN PASANG CCTV HARGA TERJANGKAU SIAP INSTALASI DI</span>
                    <h1>{''}<span className="wrap"><FaHome className="homeicon" /> {text}</span></h1>
                    <p>JANGAN RAGU LAGI, JAGA TEMPAT ANDA TETAP AMAN, KONDUSIF DAN TERPANTAU, KONSULTASI VIA WHATSAPP MUDAH, GRATIS DENGAN SALES TERPERCAYA DARI MAVALDA CCTV DIJAMIN FAST RESPON, AMANAH DAN BERPENGALAMAN</p>
                    <span className="tagline">PROMO KHUSUS HARI INI</span>
                    <h3 className="date">CEK PROMO SEKARANG!</h3>
                    <a className="removeline" href="https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya" target="_blank"><button>Hubungi Kami<ArrowRightCircle size={25} /></button></a>
                    </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}