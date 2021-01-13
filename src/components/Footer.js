import { Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
    <footer>
        <Container>
            <Row>
                <div className="col-sm-12 text-center content">
                    <span className="to-top-wrapper"><a href="#top" className="to-top"><FontAwesomeIcon icon={faAngleUp} /></a></span>
                    <p>Website coded with lots of <FontAwesomeIcon icon={faHeart} className="heartbeat" /> by Tania</p>
                    <small className="text-muted">
                        <a href="https://github.com/taniach/wedding-site" target="_blank" rel="noreferrer">
                            View on GitHub
                        </a>
                    </small>
                </div>
            </Row>
        </Container>
    </footer>
    );
}
  
export default Footer;