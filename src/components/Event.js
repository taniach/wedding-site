import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Garland from './../img/garland.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faMapMarkerAlt, faTshirt } from '@fortawesome/free-solid-svg-icons';

function Event() {
    return (
    <section id="event">
        <div className="text-center story-title">
            <h1 className="big">Event</h1>
        </div>
        <Container>
            <Row>
                <Col md={6} sm={12}>
                    <Image src={Garland} rounded fluid />
                </Col>
                <Col md={6} sm={12}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="event-name">Wedding</Card.Title>

                            <Card.Text>
                                <FontAwesomeIcon icon={faCalendarAlt} /> Date: Friday, 4th June 2021
                            </Card.Text>

                            <Card.Text>
                                <FontAwesomeIcon icon={faClock} /> Time: 9.30am to 11.30am <br/>
                                <small>Lunch will be served from 11.30am onwards</small>
                            </Card.Text>

                            <Card.Text>
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> Venue: Holy Tree Balasubramaniar Temple Wedding Hall<br/>
                                <small>10 Yishun Industrial Park A, Singapore 768772</small><br/>
                                <small>Nearest MRT: 3 minutes walk from Canberra station</small><br/>
                                <small>
                                    <a href="https://goo.gl/maps/Cru7t1DHSwz6y7HV6" target="_blank" rel="noreferrer">
                                        Get directions
                                    </a>
                                </small>
                            </Card.Text>

                            <Card.Text>
                                <FontAwesomeIcon icon={faTshirt} /> Dress code: Formals/traditional Indian attire
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
    );
}
  
export default Event;