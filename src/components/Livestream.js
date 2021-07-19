import { ResponsiveEmbed, Container } from 'react-bootstrap';

function Livestream() {
    return (
        <section id="livestream">
        <div className="text-center story-title">
            <h1 className="big">Wedding Highlights</h1>
        </div>
        <Container>
        
            <ResponsiveEmbed aspectRatio="16by9">
            <iframe width="560" height="315" src="https://player.vimeo.com/video/576686556?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="Senthil and Tania WEdding Highlights" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </ResponsiveEmbed>
        
        </Container>
        </section>
    
    );
}
  
export default Livestream;