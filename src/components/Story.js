import { CardColumns, Card } from 'react-bootstrap';
import April2 from './../img/April2.png';
import April5 from './../img/April5.png';
import April15 from './../img/April15.png';
import Together from './../img/together.jpg';
import Holi from './../img/holi.jpeg';

function Story() {
    return (
        <section id="story">
            <div className="text-center story-title">
                <h1 className="big">Our Story</h1>
                <small className="text-muted">from Senthil's perspective</small>
            </div>
        
        <CardColumns>
            <Card>
                <Card.Body>
                <Card.Title>7th March 2015</Card.Title>
                <Card.Text>
                    We met for the first time in our lives through a "Holi" event. 
                    Holi is a popular ancient Hindu festival also known as the "Festival of Colours."
                    After the event, we added each other on Facebook and moved on with our lives. 
                    Unlike most love stories, we didn't have any interest in each other. 
                </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={Holi} />
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>9th February 2016</Card.Title>
                <Card.Text>
                    I was leaving from Singapore to Manchester, United Kingdom, for the Overseas Entrepreneurship program that day. I wrote a post on Facebook.
                    She commented on my post along with many of my other friends. Surprisingly, she was on an exchange program in Edinburgh at that time. 
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={April2} />
                    <Card.Body>
                    <Card.Title>2nd April 2016</Card.Title>
                    <Card.Text>
                        She was visiting Manchester on a solo trip and I thought I will have lunch with her and look around the city with her. 
                        I was alone there anyway - away from friends and family. 
                        I decided to meet her at the train station. I got a little late. When I met her in Manchester, the first thought that occurred to me was "Wow, she is so beautiful!". 
                        We spent a day together roaming around Manchester. The more we spoke to each other, the closer we felt to each other. 
                        I saw the friendly, humble, jovial &amp; bubbly side of her.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={April5} />
                    <Card.Body>
                    <Card.Title>5th April 2016</Card.Title>
                    <Card.Text>
                        We met again at Brighton 3 days later, a short distance away from London. 
                        We explored the Royal pavilion, Brighton beach, went on the ferris wheel just above the sea, 
                        and even went for dinner at a cosy restaurant. It was a day to remember. 
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={April15} />
                    <Card.Body>
                    <Card.Title>15th April 2016</Card.Title>
                    <Card.Text>
                    A couple of weeks later we met at Oxenholme Lake District and I eventually confessed to her that I liked her and asked her whether she would be my girlfriend. 
                    She said yes, she likes me too. I was all smiles that day!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>2016-2020</Card.Title>
                <Card.Text>
                When I thought we were still in the dating phase, she spoke about marriage. 
                I was surprised and wondered what she saw in me that she wanted to spend the rest of her life with me. 
                She learnt an entirely new language for me, cared deeply for me and stuck with me through my loneliest days. 
                Similarly, I stuck with her through her hardest times - her emotional struggles, 
                hearing her sharing her joyful and difficult moments, I loved her all I could.
                </Card.Text> 

                <Card.Text>During the course of our relationship, we have been through our fair share of pain and struggles. 
                Besides the typical challenges most couples face, we had to keep our relationship a secret because we knew 
                my parents would disapprove of us due to caste differences. Tania is Bengali, while I am Tamil, 
                from the Chettiar community. Eventually, when we told them, they were upset as I went against the 
                expectations they had for my marriage.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={Together} />
                <Card.Body>
                    <Card.Title>23rd October 2020</Card.Title>
                    <Card.Text>
                    My parents finally accepted us and agreed to book an auspicious date for our marriage. 
                    It was one of the happiest days of our lives! 
                    Many fights, tears and struggles later, we are here today, 
                    our love for each other stronger than ever. We seek the 
                    blessing of all our friends and family on our wedding day.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card bg="medium" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>Love is beyond language, religion, caste and status.</p>
                <p>Love is hope.</p>
                <p>Love is truth.</p>
                <p>Love is life.</p>
                </blockquote>
            </Card>
        </CardColumns>
        </section>
    );
}
  
export default Story;