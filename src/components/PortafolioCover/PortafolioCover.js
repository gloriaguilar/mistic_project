import "./portafolio.css";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Quotes from './Quotes';

import BeautiImg from "../assets/img/projects/beauty/ocean.png";
import Hannah from "../assets/img/projects/hannah/hanna.png";
import Yass from "../assets/img/projects/yassfit/yass.png";
import Personal from "../assets/img/projects/personales/personal.jpg";


const PortafolioCover = () => {

    const myPortafolio = [
        {
            "project": "Hannah del Mar",
            "img": Hannah,
            "slug": "hannah-del-mar"
        },
        {
            "project": "Yassgofit ",
            "img": Yass,
            "slug": "yassgofit"
        },
        {
            "project": "Beauty and ocen ",
            "img": BeautiImg,
            "slug": "beauty-ocean"
        },
        {
            "project": "Personales",
            "img": Personal,
            "slug": "personales"
        },
    ]
    return (
        <>
            <Container className='mt-4'>
                <h1 className='text-center text-green'>MI PORTAFOLIO</h1>
                <Row className='portafolio-cover-container'>
                    {
                        myPortafolio.map((item, i) => {
                            return (
                                <div key={i} className='p-3 card-container-portafolio ' >
                                    <Card className="text-white" >
                                        <Card.Img src={item.img} alt={item.slug} className='preview-portafolio-img' />
                                        <Card.ImgOverlay>
                                            <p className='project-title'>{item.project}</p>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </Row>
                <div className='text-end'>
                    <Button className='btn-style' size="lg">
                        Conoce mas sobre mis proyectos
                    </Button>{' '}
                </div>
            </Container >
            <div className='container-quotes'>
                <Quotes />
            </div>
        </>
    )
}

export default PortafolioCover;