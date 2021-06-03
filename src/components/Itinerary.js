import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import SaveTheDate from './../img/saveTheDate.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function Itinerary() {
    return (
    <section id="itinerary">
        <div className="text-center story-title">
            <h1 className="big">Itinerary</h1>
        </div>
        <Container>
            <Row>
                <Col md={6} sm={12}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="event-name">Start of livestream</Card.Title>

                            <Card.Text>
                                <FontAwesomeIcon icon={faClock} /> Time: 8.30am SGT / 6am IST<br/>
                            </Card.Text>

                            <Card.Title className="event-name">Registry of marriage (solemnisation)</Card.Title>

                            <Card.Text>
                                <FontAwesomeIcon icon={faClock} /> Time: 8.30-9am SGT / 6-6.30am IST<br/>
                                <small>We will exchange marriage vows. A solemniser from the Registry of Marriages, Singapore, will give us the marriage certificate.</small><br/>
                            </Card.Text>

                            <Card.Title className="event-name">Traditional marriage and rituals</Card.Title>

                            <Card.Text>
                                <FontAwesomeIcon icon={faClock} /> Time: 9.30-11am SGT / 7-8.30am IST<br/>
                                <small>The traditional marriage will include Senthil putting the thali around Tania’s neck. The thali is a mark of respect, love and dignity which is presented to the wife by her husband during the auspicious hour of the marriage day. It is a revered symbol of Hindu marriage. In the past, the thali was a gold sacred thread but recently the thali is often embedded in a gold chain which the husband puts around the wife’s neck. </small><br/>
                            </Card.Text>
                            
                            <Card.Title className="event-name">End of livestream</Card.Title>
                            <Card.Text>
                                <small>
                                If you would like to have a virtual meet, please do contact Senthil or Tania via WhatsApp or Social Media message to schedule a zoom meet with us. We are excited to interact with you and even take some pics with you via Zoom!
                                </small>
                            </Card.Text>

                            <Card.Title className="event-name">Photo taking with guests</Card.Title>

                            <Card.Text>
                                <FontAwesomeIcon icon={faClock} /> Time: 11am-12.30pm SGT<br/>
                            </Card.Text>

                            <Card.Title className="event-name">Distribution of lunch bento boxes</Card.Title>

                            <Card.Text>
                                <FontAwesomeIcon icon={faClock} /> Time: 11.30am-1pm SGT<br/>
                                <small>Lunch in takeaway boxes will be served from 11am onwards. Eating or drinking is not allowed at the venue due to Covid-19 restrictions.</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} sm={12}>
                    <Image src={SaveTheDate} rounded fluid />
                </Col>
            </Row>
        </Container>
    </section>
    );
}
  
export default Itinerary;