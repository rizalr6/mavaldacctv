import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaWhatsapp, FaPhone, FaEnvelope, FaGlobeAsia} from 'react-icons/fa';
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items">
                    <Col xs={12} md={4} xl={6}>
                        <h1>HUBUNGI KAMI</h1>
                        <p>Tertarik dengan produk Kami? jangan ragu untuk menghubungi kami. Customer Service Kami siap melayani dengan fast respon.</p>
                        <div className="kontak-kiri">
                        <FaPhone className="icon"/>
                        <span> 0813-3316-0256</span><br></br> 
                        <FaWhatsapp className="icon"/>     
                        <span> 0822-3417-4425</span><br></br>
                        <FaEnvelope className="icon"/>      
                        <span> mavalda.soekarindo@gmail.com</span><br></br>
                        <FaGlobeAsia className="icon"/>      
                        <span> mavaldacctv.com</span><br></br>
                        </div>
                        <a className="call1" href="https://wa.me/+6281333160256?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya" target="_blank"><button><FaWhatsapp className="iconcall"/>  Cek WhatsApp</button></a>
                        <a className="call2" href="https://wa.me/+6281333160256?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya" target="_blank"><button><FaPhone className="iconcall"/>  Hubungi Kami</button></a>     
                    </Col>
                    <Col xs={12} md={8} xl={6}>
                        <div className="kontak-kanan">
                        <p className="headline">Dapatkan Penawaran Terbaik<br></br> Melalui Nomor dibawah ini.</p>
                        <h1>0822 3417 4425</h1> 
                        <a className="call0" href="https://wa.me/+6281333160256?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya" target="_blank"><button><FaWhatsapp className="iconcall"/>  Hubungi Kami</button></a>    
                        <br></br>
                        <p className="headline1">www.mavaldacctv.com</p>        
                        <p className="headline2">Melayani Pemasangan CCTV Se Indonesia</p>            
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}