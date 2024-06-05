import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProductCard } from "./ProductCard";
//hikvsion2mp
import hikvision1 from "../assets/img/hikvision1.jpg";
import hikvision2 from "../assets/img/hikvision2.jpg";
import hikvision3 from "../assets/img/hikvision3.jpg";
import hikvision4 from "../assets/img/hikvision4.jpg";
import hikvision5 from "../assets/img/hikvision5.jpg";
import hikvision6 from "../assets/img/hikvision6.jpg";
//hikvision5mp
import hikvision5mp1 from "../assets/img/hikvision5mp1.jpg";
import hikvision5mp2 from "../assets/img/hikvision5mp2.jpg";
import hikvision5mp3 from "../assets/img/hikvision5mp3.jpg";
import hikvision5mp4 from "../assets/img/hikvision5mp4.jpg";
import hikvision5mp5 from "../assets/img/hikvision5mp5.jpg";
import hikvision5mp6 from "../assets/img/hikvision5mp6.jpg";
//colorvu
import colorvu1 from "../assets/img/colorvu1.jpg";
import colorvu2 from "../assets/img/colorvu2.jpg";
import colorvu3 from "../assets/img/colorvu3.jpg";
import colorvu4 from "../assets/img/colorvu4.jpg";
import colorvu5 from "../assets/img/colorvu5.jpg";
import colorvu6 from "../assets/img/colorvu6.jpg";
//hilook2mp
import hilook1 from "../assets/img/hilook1.jpg";
import hilook2 from "../assets/img/hilook2.jpg";
import hilook3 from "../assets/img/hilook3.jpg";
import hilook4 from "../assets/img/hilook4.jpg";
import hilook5 from "../assets/img/hilook5.jpg";
import hilook6 from "../assets/img/hilook6.jpg";
//dahua2mp
import dahua1 from "../assets/img/dahua1.jpg";
import dahua2 from "../assets/img/dahua2.jpg";
import dahua3 from "../assets/img/dahua3.jpg";
import dahua4 from "../assets/img/dahua4.jpg";
import dahua5 from "../assets/img/dahua5.jpg";
import dahua6 from "../assets/img/dahua6.jpg";
//dahua5mp
import dahua5mp1 from "../assets/img/dahua5mp1.jpg";
import dahua5mp2 from "../assets/img/dahua5mp2.jpg";
import dahua5mp3 from "../assets/img/dahua5mp3.jpg";
import dahua5mp4 from "../assets/img/dahua5mp4.jpg";
import dahua5mp5 from "../assets/img/dahua5mp5.jpg";
import dahua5mp6 from "../assets/img/dahua5mp6.jpg";
// gambar navbar product
import hikvision5mp from "../assets/img/hikvision5mpfix.png";
import hikvision2mp from "../assets/img/hikvision2mpfix.png";
import dahua2mp from "../assets/img/dahua2mpfix.png";
import hilook2mp from "../assets/img/hilook2mpfix.png";
import colorvu2mp from "../assets/img/colorvu2mpfix.png";
import dahua5mp from "../assets/img/dahua5mpfix.png";

export const Products = () => {

    const products = [ //hikvision 2mp
        {
            title: "Paket 2 Kamera HIKVISION 2 MP",
            description: "HIKVISION Kamera Indoor 2 MP 1 Unit",
            description2: "HIKVISION Kamera Outdoor 2 MP 1 Unit",
            imgUrl: hikvision1,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp2.799.000",
            dvr: "DVR HIKVISION HDTVI 4CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 4 Unit",
            cable: "20 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 4 Kamera HIKVISION 2 MP",
            description: "HIKVISION Kamera Indoor 2MP 2 Unit",
            description2: "HIKVISION Kamera Outdoor 2MP 2 Unit",
            imgUrl: hikvision2,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp3.799.000",
            dvr: "DVR HIKVISION HDTVI 4CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 8 Unit",
            cable: "40 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 6 Kamera HIKVISION 2 MP",
            description: "HIKVISION Kamera Indoor 2MP 3 Unit",
            description2: "HIKVISION Kamera Outdoor 2MP 3 Unit",
            imgUrl: hikvision3,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp5.899.000",
            dvr: "DVR HIKVISION HDTVI 8CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 12 Unit",
            cable: "60 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 8 Kamera HIKVISION 2 MP",
            description: "HIKVISION Kamera Indoor 2MP 4 Unit",
            description2: "HIKVISION Kamera Outdoor 2MP 4 Unit",
            imgUrl: hikvision4,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp7.099.000",
            dvr: "DVR HIKVISION HDTVI 8CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 16 Unit",
            cable: "80 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 10 Kamera HIKVISION 2 MP",
            description: "HIKVISION Kamera Indoor 2MP 5 Unit",
            description2: "HIKVISION Kamera Outdoor 2MP 5 Unit",
            imgUrl: hikvision5,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp10.399.000",
            dvr: "DVR HIKVISION HDTVI 16CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 20 Unit",
            cable: "100 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 12 Kamera HIKVISION 2 MP",
            description: "HIKVISION Kamera Indoor 2MP 6 Unit",
            description2: "HIKVISION Kamera Outdoor 2MP 6 Unit",
            imgUrl: hikvision6,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp11.799.000",
            dvr: "DVR HIKVISION HDTVI 16CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 24 Unit",
            cable: "120 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
    ];
    const products2 = [ //hilook 2mp
        {
            title: "Paket 2 Kamera HILOOK 2 MP",
            description: "HILOOK Kamera Indoor 2MP 1 Unit",
            description2: "HILOOK Kamera Outdoor 2MP 1 Unit",
            imgUrl: hilook1,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp2.299.000",
            dvr: "DVR HILOOK HDTVI 4CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 4 Unit",
            cable: "20 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 4 Kamera HILOOK 2 MP",
            description: "HILOOK Kamera Indoor 2MP 2 Unit",
            description2: "HILOOK Kamera Outdoor 2MP 2 Unit",
            imgUrl: hilook2,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp3.299.000",
            dvr: "DVR HILOOK HDTVI 4CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 8 Unit",
            cable: "40 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 6 Kamera HILOOK 2 MP",
            description: "HILOOK Kamera Indoor 2MP 3 Unit",
            description2: "HILOOK Kamera Outdoor 2MP 3 Unit",
            imgUrl: hilook3,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp5.399.000",
            dvr: "DVR HILOOK HDTVI 8CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 12 Unit",
            cable: "60 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 8 Kamera HILOOK 2 MP",
            description: "HILOOK Kamera Indoor 2MP 4 Unit",
            description2: "HILOOK Kamera Outdoor 2MP 4 Unit",
            imgUrl: hilook4,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp6.499.000",
            dvr: "DVR HILOOK HDTVI 8CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 16 Unit",
            cable: "80 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 12 Kamera HILOOK 2 MP",
            description: "HILOOK Kamera Indoor 2MP 6 Unit",
            description2: "HILOOK Kamera Outdoor 2MP 6 Unit",
            imgUrl: hilook5,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp10.299.000",
            dvr: "DVR HILOOK HDTVI 16CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 24 Unit",
            cable: "120 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 16 Kamera HILOOK 2 MP",
            description: "HILOOK Kamera Indoor 2MP 8 Unit",
            description2: "HILOOK Kamera Outdoor 2MP 8 Unit",
            imgUrl: hilook6,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp12.599.000",
            dvr: "DVR HILOOK HDTVI 16CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 32 Unit",
            cable: "120 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
    ];
    const products3 = [ //dahua 2mp
        {
            title: "Paket 2 Kamera Dahua 2 MP",
            description: "Dahua Kamera Indoor 2 MP 1 Unit",
            description2: "Dahua Kamera Outdoor 2 MP 1 Unit",
            imgUrl: dahua1,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp2.099.000",
            dvr: "DVR Dahua HDCVI 4CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 4 Unit",
            cable: "20 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 4 Kamera Dahua 2 MP",
            description: "Dahua Kamera Indoor 2MP 2 Unit",
            description2: "Dahua Kamera Outdoor 2MP 2 Unit",
            imgUrl: dahua2,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp3.099.000",
            dvr: "DVR Dahua HDCVI 4CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 8 Unit",
            cable: "40 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 6 Kamera Dahua 2 MP",
            description: "Dahua Kamera Indoor 2MP 3 Unit",
            description2: "Dahua Kamera Outdoor 2MP 3 Unit",
            imgUrl: dahua3,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp5.199.000",
            dvr: "DVR Dahua HDCVI 8CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 12 Unit",
            cable: "60 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 8 Kamera Dahua 2 MP",
            description: "Dahua Kamera Indoor 2MP 4 Unit",
            description2: "Dahua Kamera Outdoor 2MP 4 Unit",
            imgUrl: dahua4,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp6.099.000",
            dvr: "DVR Dahua HDCVI 8CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 16 Unit",
            cable: "80 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 10 Kamera Dahua 2 MP",
            description: "Dahua Kamera Indoor 2MP 5 Unit",
            description2: "Dahua Kamera Outdoor 2MP 5 Unit",
            imgUrl: dahua5,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp8.599.000",
            dvr: "DVR Dahua HDCVI 16CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 20 Unit",
            cable: "100 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 12 Kamera Dahua 2 MP",
            description: "Dahua Kamera Indoor 2MP 6 Unit",
            description2: "Dahua Kamera Outdoor 2MP 6 Unit",
            imgUrl: dahua6,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp9.499.000",
            dvr: "DVR Dahua HDCVI 16CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 24 Unit",
            cable: "120 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
    ];
    const products4 = [ //hikvision 5mp
        {
            title: "Paket 2 Kamera HIKVISION 5 MP",
            description: "HIKVISION Kamera Indoor 5MP 1 Unit",
            description2: "HIKVISION Kamera Outdoor 5MP 1 Unit",
            imgUrl: hikvision5mp1, //hikvision5mp1
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp3.500.000",
            dvr: "DVR HIKVISION HDTVI 4CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 4 Unit",
            cable: "20 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 4 Kamera HIKVISION 5 MP",
            description: "HIKVISION Kamera Indoor 5MP 2 Unit",
            description2: "HIKVISION Kamera Outdoor 5MP 2 Unit",
            imgUrl: hikvision5mp2,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp5.800.000",
            dvr: "DVR HIKVISION HDTVI 4CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 8 Unit",
            cable: "40 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 6 Kamera HIKVISION 5 MP",
            description: "HIKVISION Kamera Indoor 5MP 3 Unit",
            description2: "HIKVISION Kamera Outdoor 5MP 3 Unit",
            imgUrl: hikvision5mp3,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp8.500.000",
            dvr: "DVR HIKVISION HDTVI 8CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 12 Unit",
            cable: "60 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 8 Kamera HIKVISION 5 MP",
            description: "HIKVISION Kamera Indoor 5MP 4 Unit",
            description2: "HIKVISION Kamera Outdoor 5MP 4 Unit",
            imgUrl: hikvision5mp4,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp10.600.000",
            dvr: "DVR HIKVISION HDTVI 8CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 16 Unit",
            cable: "80 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 12 Kamera HIKVISION 5 MP",
            description: "HIKVISION Kamera Indoor 5MP 6 Unit",
            description2: "HIKVISION Kamera Outdoor 5MP 6 Unit",
            imgUrl: hikvision5mp5,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp17.900.000",
            dvr: "DVR HIKVISION HDTVI 16CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 24 Unit",
            cable: "120 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 16 Kamera HIKVISION 5 MP",
            description: "HIKVISION Kamera Indoor 5MP 8 Unit",
            description2: "HIKVISION Kamera Outdoor 5MP 8 Unit",
            imgUrl: hikvision5mp6,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp21.900.000",
            dvr: "DVR HIKVISION HDTVI 16CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 32 Unit",
            cable: "120 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
    ];
    const products5 = [ //hikvisioncolorvu2mp
        {
            title: "Paket 2 Kamera HIKVISION ColorVu 2 MP",
            description: "HIKVISION ColorVu Kamera Indoor 2MP 1 Unit",
            description2: "HIKVISION ColorVu Kamera Outdoor 2MP 1 Unit",
            imgUrl: colorvu1, //hikvisioncolorvu1
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp3.710.000",
            dvr: "DVR HIKVISION HDTVI 4CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 4 Unit",
            cable: "20 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 4 Kamera HIKVISION ColorVu 2 MP",
            description: "HIKVISION ColorVu Kamera Indoor 2MP 2 Unit",
            description2: "HIKVISION ColorVu Kamera Outdoor 2MP 2 Unit",
            imgUrl: colorvu2,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp6.595.000",
            dvr: "DVR HIKVISION HDTVI 4CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 8 Unit",
            cable: "40 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 6 Kamera HIKVISION ColorVu 2 MP",
            description: "HIKVISION ColorVu Kamera Indoor 2MP 3 Unit",
            description2: "HIKVISION ColorVu Kamera Outdoor 2MP 3 Unit",
            imgUrl: colorvu3,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp9.325.000",
            dvr: "DVR HIKVISION HDTVI 8CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 12 Unit",
            cable: "60 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 8 Kamera  HIKVISION ColorVu 2 MP",
            description: "HIKVISION ColorVu Kamera Indoor 2MP 4 Unit",
            description2: "HIKVISION ColorVu Kamera Outdoor 2MP 4 Unit",
            imgUrl: colorvu4,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp11.895.000",
            dvr: "DVR HIKVISION HDTVI 8CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 16 Unit",
            cable: "80 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 12 Kamera HIKVISION ColorVu 2 MP",
            description: "HIKVISION ColorVu Kamera Indoor 2MP 6 Unit",
            description2: "HIKVISION ColorVu Kamera Outdoor 2MP 6 Unit",
            imgUrl: colorvu5,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp18.985.000",
            dvr: "DVR HIKVISION HDTVI 16CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 24 Unit",
            cable: "120 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 16 Kamera HIKVISION ColorVu 2 MP",
            description: "HIKVISION ColorVu Kamera Indoor 2MP 8 Unit",
            description2: "HIKVISION ColorVu Kamera Outdoor 2MP 8 Unit",
            imgUrl: colorvu6,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp23.825.000",
            dvr: "DVR HIKVISION HDTVI 16CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 32 Unit",
            cable: "120 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
    ];
    const products6 = [ //dahua5mp
        {
            title: "Paket 2 Kamera Dahua 5 MP",
            description: "Dahua Kamera Indoor 5MP 1 Unit",
            description2: "Dahua Kamera Outdoor 5MP 1 Unit",
            imgUrl: dahua5mp1, //dahua5mp1
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp3.000.000",
            dvr: "DVR Dahua HDCVI 4CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 4 Unit",
            cable: "20 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 4 Kamera Dahua 5 MP",
            description: "Dahua Kamera Indoor 5MP 2 Unit",
            description2: "Dahua Kamera Outdoor 5MP 2 Unit",
            imgUrl: dahua5mp2,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp5.000.000",
            dvr: "DVR Dahua HDCVI 4CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 8 Unit",
            cable: "40 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 6 Kamera Dahua 5 MP",
            description: "Dahua Kamera Indoor 5MP 3 Unit",
            description2: "Dahua Kamera Outdoor 5MP 3 Unit",
            imgUrl: dahua5mp3,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp7.400.000",
            dvr: "DVR Dahua HDCVI 8CH 1 Unit",
            hdd: "Hard Disk 500GB Seagate 1 Unit",
            psu: "Power Supply 12V-10A 1 Unit",
            con: "Konektor BNC 12 Unit",
            cable: "60 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 8 Kamera Dahua 5 MP",
            description: "Dahua Kamera Indoor 5MP 4 Unit",
            description2: "Dahua Kamera Outdoor 5MP 4 Unit",
            imgUrl: dahua5mp4,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp9.100.000",
            dvr: "DVR Dahua HDCVI 8CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 16 Unit",
            cable: "80 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 12 Kamera Dahua 5 MP",
            description: "Dahua Kamera Indoor 5MP 6 Unit",
            description2: "Dahua Kamera Outdoor 5MP 6 Unit",
            imgUrl: dahua5mp5,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp14.300.000",
            dvr: "DVR Dahua HDCVI 16CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 24 Unit",
            cable: "120 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
        {
            title: "Paket 16 Kamera Dahua 5 MP",
            description: "Dahua Kamera Indoor 5MP 8 Unit",
            description2: "Dahua Kamera Outdoor 5MP 8 Unit",
            imgUrl: dahua5mp6,
            link: "https://wa.me/+6282234174425?text=Halo%20Mavalda%20CCTV%20Tolong%20Pricelist%20Paket%20CCTVnya%20Ya",
            detail: "Hubungi Kami",
            harga: "Rp17.400.000",
            dvr: "DVR Dahua HDCVI 16CH 1 Unit",
            hdd: "Hard Disk 1TB Seagate 1 Unit",
            psu: "Power Supply 12V-20A 1 Unit",
            con: "Konektor BNC 32 Unit",
            cable: "120 Meter Kabel Coaxial RG59+",
            support: "Free Instalasi",
        },
    ];

    return (
       <section className="product" id="product">
        <Container>
            <Row>
                <Col>
                <h2> Products </h2>
                <p>Kami menawarkan paket CCTV dengan harga terjangkau</p>
                <Tab.Container id="products-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first"><img src={hikvision2mp} className="hikvisionmp"/></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second"><img src={hilook2mp} className="hilook2mp"/></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third"><img src={dahua2mp} className="dahuamp"/></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth"><img src={hikvision5mp} className="hikvisionmp"/></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fifth"><img src={colorvu2mp} className="colorvu2mp"/></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="sixth"><img src={dahua5mp} className="dahuamp"/></Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    products.map((products, index) => {
                                        return (
                                            <ProductCard
                                                key={index}
                                                {...products}
                                                />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Row>
                                {
                                    products2.map((products2, index) => {
                                        return (
                                            <ProductCard
                                                key={index}
                                                {...products2}
                                                />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Row>
                                {
                                    products3.map((products3, index) => {
                                        return (
                                            <ProductCard
                                                key={index}
                                                {...products3}
                                                />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            <Row>
                                {
                                    products4.map((products4, index) => {
                                        return (
                                            <ProductCard
                                                key={index}
                                                {...products4}
                                                />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">
                            <Row>
                                {
                                    products5.map((products5, index) => {
                                        return (
                                            <ProductCard
                                                key={index}
                                                {...products5}
                                                />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="sixth">
                            <Row>
                                {
                                    products6.map((products6, index) => {
                                        return (
                                            <ProductCard
                                                key={index}
                                                {...products6}
                                                />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
       </section>
    )
}