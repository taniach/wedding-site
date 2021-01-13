import { Container, Row, Col, Image } from 'react-bootstrap';
import Phone from './../img/phone.png';

function TagUs() {
    return (
    <section id="instagram">
        <div className="text-center story-title">
            <h1 className="big">Tag Us</h1>
        </div>
        <Container className="text-center">
            <Row className="phone">
                <Col md={12}><Image src={Phone} rounded /></Col>
            </Row>
            <Row>
                <Col md={12}>
                <p>Help us capture special moments during our wedding.</p>
                <p>Tag your photos <a href="#instagram">#tannuNthil</a> so that we can create a memorable album with your photos.</p>
                </Col>
            </Row>
        </Container>
        
        
    </section>
    );
}
  
export default TagUs;