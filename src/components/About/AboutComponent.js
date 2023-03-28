import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutImg from "../assets/img/2.jpg";
import "./About.css";
const AboutComponent = () => {


    return (
        <div className='text-green'>
            <Container className='container-about-me'>
                <Row className='about-row'>
                    <Col className='p-3'>
                        <img src={aboutImg} alt="arleth-hernandez-photography" className="img-about" />
                    </Col>

                    <Col className='p-3'>
                        <h2 className='text-about'>Hola, yo soy Arleth</h2> <br />
                        <p className=' mt-4 text-about-p'>
                            No sé si es casualidad que yo me sienta así, siempre que tú estás cerquita de mí. <br />
                            Dime qué me hiciste, qué droga me diste. <br />
                            Que desde aquella noche no soy igual
                        </p> <br />
                        <ul className='mt-2 text-about-options'>
                            <li>Fotrografa </li>
                            <li>Influencer por días</li>
                            <li>Mamá luchona</li>
                            <li>Experta en hacerla de pedo</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default AboutComponent;