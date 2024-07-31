import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import hilookbanner from '../assets/img/hilook.jpg';
import dahuabanner from '../assets/img/dahua.jpg';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img/hikvision.png';
import img2 from '../assets/img/hilook.jpg';
import img3 from '../assets/img/dahua.jpg';
import img4 from '../assets/img/ezvizpng.png';
import { FaWhatsapp } from 'react-icons/fa';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import avatar from '../assets/img/logomsg.png';

export const Banner = () => {

  return (
    <section className="banner" id="home">
    <div>
    <FloatingWhatsApp
        phoneNumber="6282234174425"
        // phoneNumber="6285332968729" untuk test
        accountName="CCTVKU BALIKPAPAN"
        placeholder="Halo CCTVKU Balikpapan"
        avatar={avatar}
        statusMessage="Online"
        chatMessage="Kami CCTVKU Balikpapan, Ingin Paket CCTV Berapa Kamera?"
          allowEsc="true"
          allowClickAway="true"
        darkmode="false"
        notification
        chatboxHeight={400}
        notificationSound
      />
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption className="captionbanner">
        <h3> <span><a className="callbanner" href="https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya" target="_blank"><button><FaWhatsapp className="iconcallbanner"/> Cek Penawaran</button></a></span></h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
      <h3> <span><a className="callbanner" href="https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya" target="_blank"><button><FaWhatsapp className="iconcallbanner"/> Cek Penawaran</button></a></span><br></br></h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      {/* <img className="imgbanner" src={img3} alt="Third slide" /> */}
        <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
        />
      <Carousel.Caption>
      <h3> <span><a className="callbanner" href="https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya" target="_blank"><button><FaWhatsapp className="iconcallbanner"/> Cek Penawaran</button></a></span><br></br></h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      {/* <img className="imgbanner" src={img3} alt="Third slide" /> */}
        <img
        className="d-block w-100"
        src={img4}
        alt="fourth slide"
        />
      <Carousel.Caption>
      <h3> <span><a className="callbanner" href="https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya" target="_blank"><button><FaWhatsapp className="iconcallbanner"/> Cek Penawaran</button></a></span><br></br></h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  </section>
  )
 
}