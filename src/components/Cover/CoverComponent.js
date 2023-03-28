
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cover.css'
import coverImg from "../assets/img/cover/cover.jpg";
import Button from 'react-bootstrap/Button';

const CoverComponent = () => {

    return (
        <div>
            <Container className='mt-4 cover-container'>
                <Row className="row-cover-container">
                    <Col className='text-green'>
                        <div className='text-container'>
                            <h1>Arleth Hernandez</h1>
                            <p>Fotografa profesional</p>
                            <div className='d-grid btn-container'>
                                <Button >Portafolio</Button>{' '}
                            </div>


                        </div>
                    </Col>
                    <Col>
                        <img src={coverImg} className="img-cover" />
                    </Col>
                </Row>
            </Container >
            <div className='cover-quote'>
                <h3> Cuando la gente mira mis fotos quiero que sientan como cuando quieren leer un verso de un poema una segunda vez.</h3>
            </div>
        </div>
    )
}

export default CoverComponent;