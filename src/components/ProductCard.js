import { Col } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

export const ProductCard = ({ title, description, description2, imgUrl, link, detail, harga, dvr, hdd, psu, con, cable, support }) => {
    return (
        <Col sm={6} md={4}>
            <div className="prod-imgbx">
                <img src={imgUrl} />
                <div className="prod-txtx">
                    <h3>{title}</h3>
                    <h4>{harga}</h4>
                    <span>{description}</span><br></br>
                    <span>{description2}</span><br></br>
                    <span>{dvr}</span><br></br>
                    <span>{hdd}</span><br></br>
                    <span>{psu}</span><br></br>
                    <span>{con}</span><br></br>
                    <span>{cable}</span><br></br>
                    <span>{support}</span><br></br>
                    <br></br>
                    <span><a className="call" href={link} target="_blank"><button><FaWhatsapp className="iconcall"/>  {detail}</button></a></span><br></br>
                </div>
            </div>
        </Col>
    )
}