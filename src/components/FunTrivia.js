import { Container, Row, Col, Image, Button, Card, Accordion } from 'react-bootstrap';
import Giant from './../img/giant.png';

function FunTrivia() {
    return (
    <section id="fun-trivia">
        <div className="text-center story-title">
            <h1 className="big">Fun Trivia</h1>
            <p>A word of caution from Senthil. <br/>
                Read this section at your own risk because the answers are unusually long. <br/>
                Or simply skip ahead to the questions that interest you!</p>
        </div>
        <Container>
            <h2 className="text-center">Getting to know each other</h2>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="text-center">
                    Where did you first meet? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    T: My friend invited me to a Holi event just outside Kembangan MRT and I decided to go as I was bored.<br/>
                    S: We met at a Holi event in Singapore back in 2015. I was feeling a little lazy to go for the event but decided to just give it a try with a friend. 
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" className="text-center">
                    What was your first impression of Senthil?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>T: Quiet and boring guy who has not much interest in making new friends.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" className="text-center">
                    What was your first impression of Tania?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>S: Nerd! Geek. This girl probably studies all day and doesn't have a life. 
                        When my friend told me she was Dean's lister in her university, 
                        I thought my first impression of her was validated.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3" className="text-center">
                    How did you end up meeting next?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                    S: When I posted on Facebook that I was traveling to Manchester, Tania commented that she was in Edinburgh and we could meet if I was heading there. I had a short chat with her some time later and told her we could meet if she visited Manchester too. 

<br/><br/>A few weeks after that, Tania told me she was planning to come to Manchester for a day in early April. So we arranged to meet and also thought of exploring a few places in Manchester together. I was alone in Manchester as my other friends from the same programme were in London. 

Tania’s story of how she ended up traveling to Manchester is a lot more intriguing! <br/><br/>

T: A racist in the UK led me to be with Senthil today. I was on a student exchange programme for a semester in Edinburgh. During the Easter holidays, I wanted to travel to a few countries in Europe with the other students from NUS who were on the exchange programme too. As I was a Singapore PR at that point of time, I needed a Schengen visa to travel. I even needed to show confirmed flight and hotel bookings to get that visa. So I booked a trip to Iceland with a friend, then went to London to apply for this visa. <br/><br/>

However, what happened in London shocked and disappointed me tremendously. Though I fulfilled all the criteria to apply for the visa and brought all the documents to the visa office, I was rejected by a rude and racist visa officer. <br/><br/>

"You're an Indian! Go back to India" she screamed. <br/><br/>

I said, "No, I'm a student at the University of Edinburgh and I came from Singapore". <br/><br/>

She then said, "You Indians don't deserve to be anywhere outside of your corrupt country! How did you land in Singapore or Edinburgh? Get out of this visa office now!" <br/><br/>

I was very scared and said, "But I have booked a hotel and flight for Iceland already, I won't be able to get a refund for this. I fulfilled all your requirements for a visa, I checked online. I even came to London now from Edinburgh just to apply for this visa". <br/><br/>

By then, the lady was boiling in rage and she screamed, "Are you getting out or shall I ask the security to throw you out!" I got very scared to argue with the lady any further and left the office almost in tears. <br/><br/>

My dad called me a while later and asked me how it went. I was crying so much on the phone and described the incident, but he said "Don't worry, whatever happens, it's for your good". I did not believe this and said "Nothing good is going to come out of this baba! I lost so much money!!"<br/><br/>

Little did I know that my dad was right and this unpleasant incident would lead me to meeting and getting to know my life partner. While all my other friends on the student exchange programme went travelling in Europe, I was stuck in the UK. I was very affected and upset by this shocking incident for a few weeks, but then I decided it was not worth it to waste my time being upset anymore. “Let me just make the best out of what I have” I thought. And so I started to plan a solo trip to various parts of the UK and Ireland, the only places I could travel to. I wanted to visit Manchester, Cambridge, Brighton &amp; Hove, Northern Ireland, Dublin and Glasgow.<br/><br/>

When planning a 1 day stay in Manchester, I remembered that there was an acquaintance named Senthil who was staying there, and I thought that he might be able to give good recommendations for what to do in Manchester. I messaged him on Facebook. He seemed nice and friendly and gave me a couple of suggestions. He even said we could visit the places together as it was a Saturday and I agreed. So that's how we agreed to meet for a day in Manchester, which we would not have if it wasn’t for that racist and mean lady who rejected my visa!

                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4" className="text-center">
                    How did your first impressions of each other change?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                    T: My first impression of Senthil was that he was quite boring and introverted but nice. When I met Senthil, I realised he was also very kind and gentlemanly when he offered to buy me a full day bus ticket in Manchester and asked me my preferences for dinner. I was quite happy as in the past, not many people asked me what I liked and cared much about my preferences. So I would usually end up going with the majority without having any say. <br/><br/>

He even told me you're a North Indian, shall we go to a North Indian restaurant for dinner? It made me feel very special that he suggested that, as it made me comfortable that I can be who I am without being pressured to "fit in". As we started talking more and more that day, I also realised he was a lot more friendly and fun and that I had partly misjudged him earlier. <br/><br/>

S: When I met Tania in Manchester, I actually got a little late and apologised for the delay. Thankfully, she was very forgiving about it. My first thought when I met her in Manchester was “wait what? Is this the nerd I had seen during Holi last year?🤣 She looks so beautiful.” Of course I didn’t speak out what I thought then and we just casually chatted away. <br/><br/>

While we were talking, I realised we had a lot more things in common than I thought. She enjoyed exploring new places just like me and we had similar food preferences. It was really fun hanging out with her and I realised she was not at all a nerd. She was a pretty, smart, humble, friendly and fun loving girl. 

                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>

        <Container>
            <h2 className="text-center">During the relationship</h2>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="text-center">
                    When and how did you propose? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    S: I first told her I liked her in the middle of a 1 hour cruise in Brighton. It was just a few days after we got to know each other but in my mind, I was like “if I don’t tell her now, then when?”. Just open up, share with her and be prepared for the outcome whether its a yes or no.  Thankfully, she said yes and I was super happy! <br/><br/>

My surprise proposal to get married came a little late and was after our marriage was planned by my parents.<br/><br/>

T: We were supposed to go for a dinner date at Blu Kouzina, but he surprised me with a bouquet of flowers and a painting of us. I had no clue that he had been planning this for many weeks. I had even unintentionally postponed it a few times and made it difficult for him by wanting to travel with him and questioning a lot about his schedule.

                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" className="text-center">
                    What was the best surprise Tania gave you? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    S: For me, the best surprise from her was not a birthday or anniversary gift (Tania isn't the best with planning surprises😜). It was the day she started learning Tamil, because Tania's mother tongue is Bengali (not Tamil). Tania told me she was learning Tamil as an elective in her uni and she even borrowed Tamil books to learn. I was so touched, surprised and moved by her effort and really enjoyed listening to her Tamil so much. I think now she speaks it more fluently than even a few of my Tamil speaking friends. 
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" className="text-center">
                    What was the best surprise Senthil gave you? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    T: He has surprised me multiple times and I am grateful for each one of them. 1 of the biggest surprises I can think of was when he brought me to the Annalakshmi restaurant on my 23rd birthday. He said it was going to be a simple dinner but when we reached the restaurant, he started holding his stomach in pain and walked away from me. Then our friends emerged from behind and sang Happy Birthday for me. I was so surprised and happy that day!
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3" className="text-center">
                    What was your most memorable date?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                    T: It was when we met in Brighton, UK. Senthil wanted to take me to an Indian restaurant for dinner and we had planned to watch the sunset after. However, when we went there he ate sooo slowly, slow even for my standards🤣! I told him that at this rate, we would miss the sunset. He said he doesn’t mind missing the sunset, as he could see me and I was more beautiful than the sunset. I was so surprised and taken aback by this, that I dropped my spoon and was speechless for a few seconds. <br/><br/>

S: For me, the most memorable date was before we even got together. We went to a restaurant alongside a beach at Brighton and had planned to catch the sunset. As we munched on our food slowly and started chit chatting away, time flew by and we missed the sunset. Tania was like "oh no we missed the sunset." I said "it's alright we missed the sunset because your smile is more beautiful than the sunset." or something along those lines. Cheesy I know...but she liked it and couldn't stop smiling for hours!

                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4" className="text-center">
                    What do you 2 like about each other? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                    S: I like Tania’s bubbly and friendly personality. She is also very humble and down to earth, inspite of all her achievements till date. She also loves very deeply and puts in a lot of effort in her relationships.<br/><br/>
 
 T: What I like about Senthil the most is that he is always true to his word. If he says something, he definitely sticks to it. This gives me a lot of trust in the relationship. He also takes a lot of effort to show his love for me and make me feel special, even though he is not a very expressive person. 
 
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>

        <Container>
            <h2 className="text-center">Getting a little serious here</h2>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="text-center">
                    How perfect is your relationship? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    T: Our relationship is not at all perfect, though some of my friends on social media may think so. Because on social media, you generally post mostly the good stuff. But the reality is that a successful relationship requires a lot of effort. It needs willingness to understand the other person and sacrifice things to reach a common ground. It also requires tolerance for things that don't go your way as you can't expect to control everything.<br/><br/>

What made our relationship work for the past 5 years is the love we have for each other. We have arguments quite often, but we both have the willingness to listen to the other party's perspective, improve ourselves and analyse what went wrong because we love each other and want to make the relationship work. It takes conscious effort and regular practice, just like learning to play the piano. There are a lot more things to learn and I'm very excited to improve our relationship further. We bought a book on amazon called 1000 Little Habits of Happy Relationships. Can't wait to read and practice it with Senthil.<br/><br/>

S: I don’t know about other relationships out there but our relationship is far from perfect. From the start of our relationship we have had disagreements, arguments and fights even, almost every other week! Just that after each squabble, we make it a point to talk to each other, to solve the problem, to find a middleground, to help each other, to give in to each other and to forgive each other.<br/><br/>

Often, it takes up a lot of time, energy, effort and sacrifices on both sides but it is worth it. When you strive to improve your relationships, you also end up improving yourself in the process. I am proud of how much me and Tania have grown in the 5 years we have been together. Now, with marriage and a lot more responsibilities we will have to undertake, life is going to get a lot more exciting!

                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" className="text-center">
                    What was the biggest challenge for you during the relationship? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    T: Contrary to what it may appear, our relationship had constant struggles and challenges that we had to overcome. <br/><br/>

My biggest challenge was that I had always wanted a big family, especially after my father's passing a few years ago. I often felt lonely and wished for acceptance and love from not just Senthil, but also Senthil's family members. <br/><br/>

This wasn't possible for a few reasons. Initially, our relationship had to be kept a secret as they did not prefer any of their children marrying outside the Chettiar caste and Senthil was hesitant to tell them. Even when Senthil eventually told his parents, they didn't accept me at first which hurt me a lot. They also had requested both of us to keep our relationship private and wait almost 5 years for marriage, as they had initially wanted to marry Senthil's sisters off first. Though I really wished to marry soon, I agreed to them as I wanted to make them happy. I was certain that I would wait as long as necessary in order to marry Senthil. And it turned out to be worth the wait. <br/><br/>

Now they like me more than last time. I'm so glad that we are able to marry now with the acceptance of his family.<br/><br/>

S: There were 2 biggest challenges for me during the relationship. <br/><br/>

At the start of the relationship, we didn’t actually get to see each other's flaws. Just like one would try to put up the best version of themselves in a job interview and in their early stages of a new job, we mostly only showed our best selves to each other.<br/><br/>

As time went on and when we started seeing each other's flaws, a lot of arguments, fights and resentment began. This was worsened by the fact that I wanted to keep the relationship a secret from my family for as long as possible while Tania wanted otherwise. Also, communication was a constant struggle as Tania went back to Singapore while I was still in Manchester for nearly a year. There were even moments I felt if I was the right person for Tania. Lucky for us, we both put an effort to stay together even in the middle of serious arguments that sometimes lasted for days. <br/><br/>

The other big challenge for me was after I told my parents about the relationship. <br/><br/>

Me being my carefree self, when my parents told us to keep the relationship private and wait a few years to get married, I thought it was no big deal. I was happy that at least they agreed to our marriage. After a year or two of waiting, I realised what could have been easy for me was not as easy for Tania. In the absence of her dad, Tania was managing her whole household and needed a lot of emotional support. Over the years, as we waited to get married, I began to feel that it was not at all fair to Tania to make her wait longer and longer. I was caught between this and the pressure from my parents to marry later. Thankfully, after much convincing, they decided to plan our marriage earlier than they had initially said they would. 

                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" className="text-center">
                    What is caste and endogamy?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    According to Wikipedia, Caste is a form of social stratification characterized by endogamy, hereditary transmission of a style of life which often includes an occupation, ritual status in a hierarchy, and customary social interaction and exclusion based on cultural notions of purity and pollution.<br/><br/>

In the past, caste was used for 2 key reasons<br/><br/>

1. Family was the only way of transferring skills. Now that has become irrelevant. <br/><br/>
2. It gave people a “group or clan” for social security. So when they were sick or needed urgent help in case of emergency situations, they had members of their caste to turn to for help. This is irrelevant in urban areas now, where you can have insurance for security in case of emergency situations. You can also be a part of close knit social groups through your educational institutions, workplaces or even your hobby groups. <br/><br/>

Endogamy is the practice of marrying within a specific social group, caste, or ethnic group, rejecting those from others as unsuitable for marriage. Endogamy is common in many cultures and ethnic groups, and <a href="https://scroll.in/article/897802/how-same-caste-marriages-persisted-for-thousands-of-years-in-india-and-are-still-going-strong" target="_blank">caste endogamy is still practiced by many Hindus in India and around the world today.</a>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3" className="text-center">
                    What are your thoughts on caste? 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                    T: I think caste was initially started to differentiate between workers who did different types of work in ancient times and to pass these skills down to family members. For example, brahmins were religious teachers, priests and guides who spread knowledge, kshatriyas were involved in protecting the kingdoms during war, chettiars were money-lenders etc. <br/><br/>

However, it is such a pity that humans made caste so divisive and hierarchical, putting "one caste above another'' simply by birth. This is wrong because all humans are created equal and no one should feel they are superior to another. Also in modern day society, people pursue different occupations according to their liking. They do not necessarily follow what their ancestors did, do they? So why does caste still exist? <br/><br/>

Surely, there can be no basis in restricting marriages on the grounds of caste. If one is worried about traditions being lost, that is an unlinked issue. Because you can have people of the same caste who choose not to learn and follow traditional practices. And you can have people of different castes who are willing to learn and follow sensible traditional practices to be passed down to the next generation. So caste should not be the main basis even for arranged marriages. <br/><br/>

S: I feel caste holds no meaning in society today. and agree with <a href="https://www.youtube.com/watch?v=tZV_NBtSgG8" target="_blank">Sadhguru’s view point here</a>. If you ask someone who strongly believes in caste, why is it important to marry within caste, they will give 1 of the 3 reasons:<br/><br/>

1. Caste is important to pass down traditional practices. If the practices hold meaning rather than “to show off wealth, class or superiority”, I am sure they can be passed down from family to family regardless of caste. <br/><br/>
2. If you need help some day, your “caste” people will help your family. I think this is the biggest lie told to believe in the caste system today. I think regardless of caste, your true friends will help you if you need help urgently. Of course if the closest friends you make are within your caste, it will seem as if your “caste people are helping you” when it is actually your closest friends. This has nothing to do with caste but with friendship. Also, almost everyone today has the ability to invest in insurance policies to financially protect themselves today, which was not there in the past. <br/><br/>
3. There is no reason. We just believe in caste and want you to marry within the same caste as we have brought you up all our lives and want the best for you. When you know you don’t have any logical reasoning, you default to using emotions and lies to “coerce” your children into accepting the way you want things to be. If you truly want the best for your child, why would you not look into a larger pool of prospects (including and outside your caste) to find the most suitable partner for him/her? <br/><br/>
I do hope that one day, the hindu society will come to a stage when it disregards any caste by birth just like the writer in <a href="https://medium.com/@auroraruna/dad-what-caste-does-our-family-belong-to-53d54c788d59#.hmich7br6" target="_blank">this medium article here</a>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>

        <Container>
            <h2 className="text-center">The wedding</h2>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="text-center">
                    What style of wedding will you have? What rituals will you follow?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    S: Me and Tania decided to let my parents decide the type of wedding they would like us to have. The most crucial aspects of the wedding, such as the wedding date, time and venue and key rituals to be done, were planned by them. <br/><br/>

The traditional marriage will include me putting the thali around Tania’s neck. The thali is a mark of respect, love and dignity which is presented to the wife by her husband during the auspicious hour of the marriage day. It is a revered symbol of Hindu marriage. In the past, the thali was a gold sacred thread but recently the thali is embedded in a gold chain which the husband puts around the wife’s neck. <br/><br/>

However, we thought of incorporating some simple bengali rituals like putting the sindhoor and also have a bengali style photoshoot!<br/><br/>

T: Tamil style. But we plan to incorporate some bengali rituals that I find interesting like aiburobhat, gaye holud, wearing shakha pola, wearing sindoor. <br/><br/>

<a href="https://bongbride.wordpress.com/2017/11/02/bengali-wedding-rituals-part-i-aiburobhat-bengali-bridal-shower/" target="_blank">Aiburobhat</a> is a pre-wedding lavish feast prepared with the bride’s favourite items. 

<a href="https://en.wikipedia.org/wiki/Gaye_holud" target="_blank"> Gaye holud</a> is a ceremony where turmeric paste is applied on the bride’s face and hands, as turmeric is known to brighten the skin and give it a golden glow. 

<a href="https://thebengalitoday.com/2020/08/Shakha-Pola-Bangles.html" target="_blank"> Shakha pola</a> is a pair of red and white bangles. 

<a href="https://www.utsavpedia.com/cultural-connections/colored-with-pride-sindoor/" target="_blank"> Sindoor</a> is a vermilion red powder worn on the hair parting. Shakha pola and sindoor are symbols of marriage.  

                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" className="text-center">
                    Who are the vendors you engaged for your wedding?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    Venue - Holy Tree Sri Balasubramaniar Temple<br/><br/>
                    Photography - <a href="https://www.instagram.com/greymattersg/" target="_blank">Grey Matters SG</a><br/><br/>
                    Videography - <a href="https://www.instagram.com/dumarksproductions/" target="_blank">Dumarks Productions</a><br/><br/>
                    Decorations - <a href="https://www.instagram.com/sgspteltd/" target="_blank">Siva Ganesh Services</a><br/><br/>
                    Bridal Makeover - <a href="https://www.instagram.com/makeupbyshirinrei/" target="_blank">Makeup by Shirin Rei</a><br/><br/>
                    Henna - <a href="https://www.facebook.com/AashiFashion" target="_blank">AashiFashion</a><br/><br/>
                    Food and Catering - Anandha Bhavan Restaurant<br/><br/>
                    Door Gifts - Handcrafted by Tania (Bottles from <a href="https://www.idoido-weddingfavors.com/" target="_blank">Ido Ido Wedding Favours</a> and many ingredients from different vendors went into the making)
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" className="text-center">
                    Did Covid-19 affect your wedding plans?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    S: Yes from the start there were capacity restrictions, which was a huge challenge given the number of guests we had initially intended. Also, we had to make do with the fact that we couldn’t have relatives and close friends who were overseas at our wedding. <br/><br/>

When the second wave of Covid-19 infections occurred in Singapore in May, we faced a major challenge with the latest measures. <br/><br/>

We had to make guests do compulsory Pre Event Testing (PET). The temple did not allow PET to be done at their venue and we frantically started contacting clinics where guests needed to get their tests done a day before the wedding. Thankfully, we found a clinic with 8 locations around Singapore, which could bill us directly for guests to get tested in its outlets. However, quite a few guests decided to pull out due to the hassle. <br/><br/>

Besides this, we were also anxious and fearful that there would be another lockdown in Singapore. If that happened, we may have had to cancel the wedding or have a wedding with just 10 pax, both of which would have been really frustrating outcomes given all the planning and preparatory work that had been done. Thankfully, the situation came under control with the heightened measures and this didn't happen!<br/><br/>

Finally, our pre-wedding photoshoot had to be canceled and it will now have to be a post wedding photoshoot instead. The rest of Covid-19’s impact on our wedding can be viewed on our livestream😛

                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3" className="text-center">
                    How can I be a virtual guest?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                    We are just as thankful to our virtual guests as we are to guests who are present physically. This is because Covid-19 has made large gatherings impossible, so we could not have many of our friends and family. Also, because our wedding falls on a weekday and due to many of the covid19 restrictions, many of our friends and family have not been able to make it. <br/><br/>

As such we decided to make sure we could<br/><br/>

- Stream the main wedding virtually <br/>
- Have a virtual meet with our virtual guests<br/>
- Accept e-gifts here for virtual guests who want to gift us <br/><br/>

If you would like to have a virtual meet, please do contact Senthil or Tania via WhatsApp or Social Media messaging to schedule a zoom meet with us. We are excited to interact with you and even take some pics with you via Zoom!

                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>

        <Container>
            <h2 className="text-center">Life after marriage</h2>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="text-center">
                    Where are you going for your honeymoon?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    S: We had hoped for a travel bubble between Singapore and New Zealand/Australia as we have never been there. But since the second wave, we think such a bubble is unlikely anytime soon and so we are thinking of booking a cruise to nowhere!
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1" className="text-center">
                    Where will you both stay after marriage?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                    S: We bought a <a href="https://www.propertyguru.com.sg/property-guides/what-is-a-bto-flat-2-6515" target="_blank">Built To Order Flat (BTO)</a> in Bukit Panjang and it should be ready by the end of 2022! Until we get our BTO, we will mostly be staying in Tania’s house. 
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2" className="text-center">
                    Who is doing the household chores?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                    S:  We are going to split the household chores. I suggested splitting the chores based on the task at hand (e.g. I told Tania I can buy the groceries and wash the dishes, if Tania does the cooking). But Tania suggested splitting up the task in itself (e.g. I cut the veggies, she does the cooking.) We will see how this works! Initially, while Tania’s mum will be staying with us, she may guide us with some of the household chores too.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3" className="text-center">
                    What do you look forward to after your marriage?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                    S: I look forward to long walks with Tania talking about anything and everything we like, to exercising with her since we both want to improve our health, to watching our favourite movies and shows together and traveling together (when travel opens up of course)<br/><br/>

I also look forward to working on our imperfections to help each other be better versions of ourselves and better partners to each other. <br/><br/>

One thing I am undecided whether to look forward to or not is cooking our meals together, because she insists that we should be cooking together😅 (but hopefully she sees my cooking skills and kicks me out to another household department later🤣). <br/><br/>

T: Spending life with Senthil, working towards our career goals together, spending evenings relaxing and doing hobbies we love, exercising and doing yoga together, going out for grocery shopping together, cooking together sometimes, planning a big family for the future.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4" className="text-center">
                    What are your long term goals and dreams?
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                    T: To have a loving relationship with family, to have a big family like the Duke and Duchess of Cambridge, to bring up the little ones with good values, and to be financially free and achieve <a href="https://blog.seedly.sg/fire-financial-independence-retire-early-in-singapore/" target="_blank">“FIRE”</a> by 49. I don’t really want to stop working because I like my backend engineering job and want to progress more in this path, but I do want to achieve financial freedom and build a source of side income from investments/side business. One of my long term goals is to use our free time during our later years to work on <a href="https://heartyspices.com/" target="_blank">Hearty Spices</a> and bring better long term health to people around the world. <br/><br/>

S: My long term goals are mostly similar to that of Tania’s! I also have a desire to revamp entrepreneurship education in Singapore and have the ability to invest in and mentor startups one day. I would enjoy going on relaxing trips and travelling around the world too.

                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    </section>
    );
}
  
export default FunTrivia;