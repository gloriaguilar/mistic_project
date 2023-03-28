import '../layout.css';
import Container from "react-bootstrap/Container";




const Footer = () => {

    return (
        <div className='footer-container p-4'>
            <h4>Arleth Photography</h4>
            <div className='footer-options'>
                <span onClick={(e) => { window.open('https://www.instagram.com/mistic.graphy/', '_blank') }}>Instagram/</span>
                <span onClick={() => { window.location.href = 'mailto:arleth.hr.09@gmail.com'; }}>Mail</span>
            </div>
        </div >
    )
}

export default Footer;