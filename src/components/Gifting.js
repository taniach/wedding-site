import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Giant from './../img/giantGiftVouchers.png';

function Gifting() {
    return (
    <section id="gifting">
        <div className="text-center story-title">
            <h1 className="big">E-Gifting Options</h1>
        </div>
        <Container className="text-center">
            <Row>
                <Col md={12}>
                <p>Your virtual presence is the biggest gift.</p>
                <p>If you would still like to get us a gift, here is a potential gift idea. We're very touched you're thinking of us!</p>
                </Col>
            </Row>
            <Row className="phone">
                <Col md={12}>
                    <a href="https://giftano.com/prcs_createvc?mid=MCERF9YURJ&amp;fr=profile&amp;syscode=web" 
                    target="_blank" rel="noreferrer">
                        <Image src={Giant} rounded fluid/>
                    </a>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <a href="https://giftano.com/prcs_createvc?mid=MCERF9YURJ&amp;fr=profile&amp;syscode=web" 
                    target="_blank" rel="noreferrer"><Button>Get an E-Gift</Button>
                </a>
                <p>Giant is a supermarket in Singapore which offers everyday goods at affordable prices.</p>
                <p>It's a one-stop shop for groceries, home and kitchen products.</p>
                </Col>
            </Row>
        </Container>
    </section>
    );
}
  
export default Gifting;