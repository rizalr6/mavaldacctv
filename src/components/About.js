import { Container, Row, Col, Carousel } from "react-bootstrap";
import Rumah from '../assets/img/Rumah.png';
import Sekolah from '../assets/img/Sekolah.png';
import Toko from '../assets/img/Toko.png';
import Kantor from '../assets/img/Kantor.png';
import { FaWhatsapp } from "react-icons/fa";
import Client from '../assets/img/client.jpg';

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

export const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row className="about-align">
                    <Col xs={6} md={3} xl={3} className="install">
                        <img src={Rumah} />
                        <p>Pemasangan di Rumah</p> 
                    </Col>
                    <Col xs={6} md={3} xl={3} className="install">
                        <img src={Kantor} />
                        <p>Pemasangan di Kantor</p> 
                    </Col>
                    <Col xs={6} md={3} xl={3} className="install">
                        <img src={Sekolah} />
                        <p>Pemasangan di Sekolah</p> 
                    </Col>
                    <Col xs={6} md={3} xl={3} className="install">
                        <img src={Toko} />
                        <p>Pemasangan di Toko</p> 
                    </Col>
                    <a className="offer" href="https://wa.me/+6281333160256?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya" target="_blank"><button><FaWhatsapp className="iconcall"/>  Cek Penawaran</button></a>
                    <h1>Mengapa Harus Pasang CCTV Melalui Kami?</h1>
                    <Col xs={8} md={3} xl={3} className="why">
                        <h4>Jaminan Harga Terbaik</h4>
                        <p>Jangan Tergiur Harga Murah Saja, Pastikan Produk yang Anda Pesan Original dan Baru, 
                        Semua Produk Kami Terjamin Serta Harga yang kami tawarkan Merupakan Paket Terima Beres. 
                        Tersedia semua merk dan type camera yang di butuhkan Seperti AHD, HD, IP Cam , PTP Cam dan Speeddome.</p>
                    </Col>
                    <Col xs={8} md={3} xl={3} className="why">
                        <h4>Layanan Purna Jual</h4>
                        <p>Selain Dari Produk, Pastikan Juga After Sellingnya Mudah, Banyak Jasa Awal Pesan
                        Responnya Sangat Cepat, Setelah Pasang ada Kerusakan Mulai Sulit Dihubungi Bahkan Tanpa
                        Kabar Sehingga Pelanggan Harus Mengeluarkan Biaya Lagi Untuk Panggil Teknisi Lain.</p>
                    </Col>
                    <Col xs={8} md={3} xl={3} className="why">
                        <h4>Garansi Resmi</h4>
                        <p>Hal Paling Penting Sebelum Melakukan Pembelian Paket CCTV Adalah Garansi Yang Akan
                        Diterima Oleh Pembeli. Garansi yang Kami Berikan Berupa Ganti Unit Baru Jika Dalam Masa
                        Garansi ada Kerusakan, Garansi Meliputi Camera, DVR, dan Hardisk Masa Garansi 2 Tahun (Hikvision)</p>
                    </Col>
                    <h1>Jaga Keamanan Asset Anda Pasang Sekarang Juga!</h1>
                    <a className="offer" href="https://wa.me/+6281333160256?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya" target="_blank"><button><FaWhatsapp className="iconcall"/>  Konsultasi WA</button></a>
                    <Col xs={12} md={12} xl={12}> 
                    <img className="client" src={Client} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}