import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import Giant from './../img/giant.png';

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
                <p>If you would still like to get us a gift, here is a <em>Giant</em> gift idea. We're very touched you're thinking of us!</p>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <a href="https://giftano.com/prcs_createvc?mid=MCERF9YURJ&amp;fr=profile&amp;syscode=web" 
                    target="_blank" rel="noreferrer">
                        <Image src={Giant} rounded fluid/>
                    </a>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <Card>
                        <Card.Body>
                            <Card.Title>Details to enter</Card.Title>

                            <Card.Text>
                            Recipient's email: <span className="phone-email">senthil.tania@gmail.com</span><br/>
                            Recipient's phone: <span className="phone-email">90882158</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <a href="https://giftano.com/prcs_createvc?mid=MCERF9YURJ&amp;fr=profile&amp;syscode=web" 
                    target="_blank" rel="noreferrer"><Button>Get an E-Gift</Button>
                    </a>
                </Col>
            </Row>
        </Container>
    </section>
    );
}
  
export default Gifting;