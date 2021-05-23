import { ResponsiveEmbed, Container } from 'react-bootstrap';

function Livestream() {
    return (
        <section id="livestream">
        <div className="text-center story-title">
            <h1 className="big">Livestream</h1>
        </div>
        <Container>
        
            <ResponsiveEmbed aspectRatio="16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nh1sILPNzYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </ResponsiveEmbed>
        
        </Container>
        </section>
    
    );
}
  
export default Livestream;